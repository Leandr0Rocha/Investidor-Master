require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const XLSX = require('xlsx');
const fs = require('fs');
const helmet = require('helmet');
const logger = require('./src/utils/logger');

const app = express();
const PORT = process.env.PORT || 5000;
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  logger.error('API_KEY não definida nas variáveis de ambiente');
  process.exit(1);
}

// Configuração de segurança com Helmet
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'", "http://localhost:5000"]
    }
  }
}));

// Configuração do CORS
app.use(cors({
  origin: ['http://localhost:3000'],
  methods: ['GET', 'POST'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'x-api-key']
}));

app.use(express.json());

// Middleware para verificar a chave de API
const checkApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (!apiKey || apiKey !== API_KEY) {
    logger.warn('Tentativa de acesso não autorizado', { ip: req.ip });
    return res.status(401).json({ error: 'Acesso não autorizado.' });
  }
  next();
};

// Banco de dados SQLite
const dbPath = path.resolve(__dirname, process.env.NODE_ENV === 'test' ? 'test.db' : 'leads.db');
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
  if (err) {
    logger.error('Erro ao conectar ao banco de dados:', err);
  } else {
    logger.info('Conectado ao banco de dados SQLite.');
  }
});

db.run(`CREATE TABLE IF NOT EXISTS leads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  telefone TEXT NOT NULL
)`);

app.post('/api/leads', (req, res) => {
  const { nome, email, telefone } = req.body;
  if (!nome || !email || !telefone) {
    logger.warn('Tentativa de cadastro com campos inválidos', { body: req.body });
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }
  
  db.run(
    'INSERT INTO leads (nome, email, telefone) VALUES (?, ?, ?)',
    [nome, email, telefone],
    function (err) {
      if (err) {
        logger.error('Erro ao salvar lead:', err);
        return res.status(500).json({ error: 'Erro ao salvar lead.' });
      }
      logger.info('Novo lead cadastrado', { id: this.lastID, email });
      res.status(201).json({ id: this.lastID, nome, email, telefone });
    }
  );
});

// Rota protegida para exportar os leads em formato Excel
app.get('/api/admin/export-leads', checkApiKey, (req, res) => {
  db.all('SELECT * FROM leads', [], (err, rows) => {
    if (err) {
      logger.error('Erro ao buscar leads:', err);
      return res.status(500).json({ error: 'Erro ao buscar leads.' });
    }

    // Cria uma planilha a partir dos dados
    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Leads');

    // Salva o arquivo temporariamente
    const filePath = './leads.xlsx';
    XLSX.writeFile(workbook, filePath);

    // Envia o arquivo para download
    res.download(filePath, 'leads.xlsx', (err) => {
      if (err) {
        logger.error('Erro ao enviar arquivo:', err);
      }
      // Remove o arquivo temporário após o download
      fs.unlinkSync(filePath);
      logger.info('Arquivo de leads exportado com sucesso');
    });
  });
});

// Rota de erro interno para testes
if (process.env.NODE_ENV === 'test') {
  app.get('/api/erro-interno', (req, res, next) => {
    next(new Error('Erro simulado'));
  });
}

// Middleware de erro global - deve ser o último middleware
app.use((err, req, res, next) => {
  logger.error('Erro interno do servidor:', { error: err.message, stack: err.stack });
  
  // Força o tipo de conteúdo para JSON
  res.setHeader('Content-Type', 'application/json');
  res.status(500).json({ error: 'Erro interno do servidor.' });
});

// Iniciar servidor apenas se não estiver em ambiente de teste
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    logger.info(`Servidor rodando em http://localhost:${PORT}`);
  });
}

module.exports = app; 