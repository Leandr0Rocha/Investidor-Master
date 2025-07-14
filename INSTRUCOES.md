# Instruções de Uso

## 🚀 Rodando com Docker Compose

1. Clone o repositório e navegue até a pasta:
```bash
git clone <url-do-repositorio>
cd Investidor-Master
```

2. Execute o projeto:
```bash
docker-compose up --build
```

3. Acesse as aplicações:
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5000

## 🛠️ Desenvolvimento Local

### Backend
```bash
cd backend
npm install
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm start
```

## 📊 Funcionalidades Disponíveis

### Frontend
- Landing page responsiva
- Formulário de captura de leads
- Sistema de depoimentos
- FAQ interativo
- Seção do instrutor

### Backend
- API REST para cadastro de leads
- Validação de e-mails duplicados
- Sistema de logs
- Banco de dados SQLite

## 🐳 Comandos Docker

### Parar o projeto
```bash
docker-compose down
```

### Rebuild após mudanças
```bash
docker-compose up --build
```

### Ver logs
```bash
docker-compose logs -f
```

## 📝 Observações Importantes

- O banco de dados SQLite é persistido no container
- Logs são salvos em `backend/logs/`
- O frontend se comunica com o backend via `REACT_APP_API_URL`
- Validação automática de e-mails duplicados no backend
- Sistema de logs configurado com Winston

## 🔧 Scripts Úteis

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