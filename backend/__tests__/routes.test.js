const request = require('supertest');
const path = require('path');
const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();

// Importa o app do servidor
const app = require('../server');

// Configuração do banco de dados de teste
const testDbPath = path.join(__dirname, '../test.db');
let db;

// Configuração do banco de dados antes de todos os testes
beforeAll((done) => {
  // Remove o banco de dados se existir
  if (fs.existsSync(testDbPath)) {
    try {
      fs.unlinkSync(testDbPath);
    } catch (err) {
      console.error('Erro ao remover banco de dados:', err);
    }
  }

  // Cria novo banco de dados com permissões de escrita
  db = new sqlite3.Database(testDbPath, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) {
      console.error('Erro ao criar banco de dados:', err);
      done(err);
      return;
    }

    // Cria a tabela
    db.run(`CREATE TABLE IF NOT EXISTS leads (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      email TEXT NOT NULL,
      telefone TEXT NOT NULL
    )`, (err) => {
      if (err) {
        console.error('Erro ao criar tabela:', err);
        done(err);
        return;
      }
      done();
    });
  });
});

// Limpa o banco de dados após cada teste
afterEach((done) => {
  db.run('DELETE FROM leads', (err) => {
    if (err) {
      console.error('Erro ao limpar banco de dados:', err);
    }
    done();
  });
});

// Fecha a conexão após todos os testes
afterAll((done) => {
  db.close((err) => {
    if (err) {
      console.error('Erro ao fechar banco de dados:', err);
      done(err);
      return;
    }
    // Remove o arquivo do banco de dados
    try {
      fs.unlinkSync(testDbPath);
    } catch (err) {
      console.error('Erro ao remover banco de dados:', err);
    }
    done();
  });
});

describe('API de Leads', () => {
  describe('POST /api/leads', () => {
    it('deve criar um novo lead com dados válidos', async () => {
      const response = await request(app)
        .post('/api/leads')
        .send({
          nome: 'Teste',
          email: 'teste@teste.com',
          telefone: '1234567890'
        });

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id');
      expect(response.body.nome).toBe('Teste');
      expect(response.body.email).toBe('teste@teste.com');
    });

    it('deve retornar erro 400 com dados inválidos', async () => {
      const response = await request(app)
        .post('/api/leads')
        .send({
          nome: 'Teste',
          // email faltando
          telefone: '1234567890'
        });

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
    });

    it('deve retornar erro 400 quando nome está faltando', async () => {
      const response = await request(app)
        .post('/api/leads')
        .send({
          email: 'teste@teste.com',
          telefone: '1234567890'
        });

      expect(response.status).toBe(400);
      expect(response.body.error).toBe('Todos os campos são obrigatórios.');
    });

    it('deve retornar erro 400 quando telefone está faltando', async () => {
      const response = await request(app)
        .post('/api/leads')
        .send({
          nome: 'Teste',
          email: 'teste@teste.com'
        });

      expect(response.status).toBe(400);
      expect(response.body.error).toBe('Todos os campos são obrigatórios.');
    });

    it('deve retornar erro 400 quando todos os campos estão faltando', async () => {
      const response = await request(app)
        .post('/api/leads')
        .send({});

      expect(response.status).toBe(400);
      expect(response.body.error).toBe('Todos os campos são obrigatórios.');
    });
  });

  describe('GET /api/admin/export-leads', () => {
    it('deve retornar erro 401 sem API key', async () => {
      const response = await request(app)
        .get('/api/admin/export-leads');

      expect(response.status).toBe(401);
      expect(response.body.error).toBe('Acesso não autorizado.');
    });

    it('deve retornar erro 401 com API key inválida', async () => {
      const response = await request(app)
        .get('/api/admin/export-leads')
        .set('x-api-key', 'invalid_key');

      expect(response.status).toBe(401);
      expect(response.body.error).toBe('Acesso não autorizado.');
    });

    it('deve exportar leads com API key válida', async () => {
      // Primeiro cria um lead
      await request(app)
        .post('/api/leads')
        .send({
          nome: 'Teste',
          email: 'teste@teste.com',
          telefone: '1234567890'
        });

      const response = await request(app)
        .get('/api/admin/export-leads')
        .set('x-api-key', 'test_api_key');

      expect(response.status).toBe(200);
      expect(response.headers['content-type']).toBe('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    });

    it('deve exportar planilha vazia quando não há leads', async () => {
      const response = await request(app)
        .get('/api/admin/export-leads')
        .set('x-api-key', 'test_api_key');

      expect(response.status).toBe(200);
      expect(response.headers['content-type']).toBe('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    });

    it('deve exportar múltiplos leads corretamente', async () => {
      // Cria vários leads
      const leads = [
        { nome: 'Teste 1', email: 'teste1@teste.com', telefone: '1234567890' },
        { nome: 'Teste 2', email: 'teste2@teste.com', telefone: '0987654321' },
        { nome: 'Teste 3', email: 'teste3@teste.com', telefone: '5555555555' }
      ];

      for (const lead of leads) {
        await request(app)
          .post('/api/leads')
          .send(lead);
      }

      const response = await request(app)
        .get('/api/admin/export-leads')
        .set('x-api-key', 'test_api_key');

      expect(response.status).toBe(200);
      expect(response.headers['content-type']).toBe('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    });
  });

  describe('Middleware de Erro Global', () => {
    it('deve retornar erro 500 para erros internos', async () => {
      const response = await request(app)
        .get('/api/erro-interno')
        .set('Accept', 'application/json');

      expect(response.status).toBe(500);
      expect(response.headers['content-type']).toMatch(/application\/json/);
      expect(response.body).toHaveProperty('error', 'Erro interno do servidor.');
    });
  });
}); 