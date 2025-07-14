# Investidor Master

Landing page para captura de leads com sistema de gerenciamento integrado.

## 🚀 Como rodar o projeto

### Pré-requisitos
- Docker e Docker Compose
- Node.js (versão 14 ou superior) - para desenvolvimento local

### Opção 1: Docker (Recomendado)

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd Investidor-Master
```

2. Execute o projeto:
```bash
docker-compose up --build
```

3. Acesse:
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5000

### Opção 2: Desenvolvimento Local

#### Backend
```bash
cd backend
npm install
npm run dev
```

#### Frontend
```bash
cd frontend
npm install
npm start
```

## 📁 Estrutura do Projeto

```
Investidor-Master/
├── backend/                 # API Node.js/Express
│   ├── src/
│   │   └── utils/
│   │       └── logger.js    # Sistema de logs
│   ├── server.js           # Servidor principal
│   ├── database.sqlite     # Banco de dados SQLite
│   └── package.json
├── frontend/               # Aplicação React
│   ├── src/
│   │   ├── components/     # Componentes React
│   │   ├── services/       # Serviços de API
│   │   ├── App.jsx
│   │   └── index.js
│   ├── public/            # Arquivos estáticos
│   └── package.json
└── docker-compose.yml     # Configuração Docker
```

## 🛠️ Tecnologias Utilizadas

### Backend
- **Node.js** com Express
- **SQLite** para banco de dados
- **Winston** para logs
- **Helmet** para segurança
- **CORS** para comunicação com frontend

### Frontend
- **React 18** com React Scripts
- **Tailwind CSS** para estilização
- **Axios** para requisições HTTP

## 📊 Funcionalidades

- ✅ Landing page responsiva
- ✅ Formulário de captura de leads
- ✅ Sistema de depoimentos
- ✅ FAQ interativo
- ✅ Seção do instrutor
- ✅ API REST para gerenciamento de leads
- ✅ Sistema de logs
- ✅ Validação de e-mails duplicados

## 🔧 Scripts Disponíveis

### Backend
```bash
npm run dev          # Desenvolvimento com nodemon
npm start           # Produção
npm run lint        # Verificar código
npm run lint:fix    # Corrigir problemas de lint
```

### Frontend
```bash
npm start           # Desenvolvimento
npm run build       # Build para produção
```

### Desenvolvimento Full-Stack
```bash
# No diretório backend
npm run dev:all     # Backend + Frontend simultaneamente
```

## 🐳 Docker

### Parar o projeto
```bash
docker-compose down
```

### Rebuild após mudanças
```bash
docker-compose up --build
```

## 📝 Observações

- O banco de dados SQLite é persistido no container
- Logs são salvos em `backend/logs/`
- O frontend se comunica com o backend via `REACT_APP_API_URL`
- Sistema de logs configurado com Winston
- Validação automática de e-mails duplicados

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request 
