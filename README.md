# Landing Page - Mentoria de Investimentos
![image](https://github.com/user-attachments/assets/37b4f771-3d27-44bd-adaa-0f02d6734e95)

Protótipo feito no Figma: https://www.figma.com/proto/kc41aH6iPx7sdpWppYCiIU/Landing-page?node-id=1-2&t=wFcq7HS90OkWEG0F-1

## Aviso de Fictício e Imagens Geradas por IA

Este projeto contém personagens, empresas e/ou cenários totalmente fictícios, criados apenas para fins de demonstração, estudo ou ilustração. As imagens presentes neste repositório foram geradas por Inteligência Artificial e não representam pessoas, marcas ou locais reais.

## 🎯 Propósito

Esta landing page foi desenvolvida para o investidor Carlos Goodman, que oferece uma mentoria gratuita de investimentos. O objetivo é capturar leads de pessoas interessadas em aprender sobre investimentos através de 4 aulas ao vivo, ministradas por um profissional experiente no mercado.

### Sobre a Mentoria
- 4 aulas ao vivo com Carlos Goodman
- Foco em educação financeira e investimentos
- Conteúdo prático e aplicável
- Acesso gratuito para inscritos

## 🎨 Inspiração e Créditos

A ideia de criar uma landing page focada na captura de leads para um evento online foi inspirada no tutorial do canal [Programação Web](https://www.youtube.com/watch?v=KjVhcnSADGA&t=223s). O conceito de utilizar um formulário simples e eficiente para coletar informações de potenciais participantes, combinado com uma apresentação clara do valor oferecido, serviu como base para o desenvolvimento deste projeto. Adaptamos a abordagem para o contexto específico de uma mentoria de investimentos, mantendo o foco na conversão de visitantes em participantes.

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React.js**: Framework principal para construção da interface
- **TailwindCSS**: Framework CSS para estilização rápida e responsiva
- **Axios**: Cliente HTTP para comunicação com o backend
- **React Router**: Gerenciamento de rotas (quando necessário)

### Backend
- **Node.js**: Runtime JavaScript
- **Express**: Framework web para Node.js
- **SQLite**: Banco de dados para armazenamento de leads
- **Jest**: Framework de testes unitários
- **Nodemon**: Monitoramento de alterações em desenvolvimento

## 📁 Estrutura do Projeto

```
landing-page/
├── frontend/               # Aplicação React
│   ├── src/
│   │   ├── components/    # Componentes React
│   │   ├── App.jsx        # Componente principal
│   │   └── index.js       # Ponto de entrada
│   ├── public/            # Arquivos estáticos
│   └── package.json       # Dependências do frontend
│
├── backend/               # API Node.js
│   ├── src/
│   │   ├── routes/       # Rotas da API
│   │   ├── models/       # Modelos de dados
│   │   └── tests/        # Testes unitários
│   ├── server.js         # Servidor Express
│   └── package.json      # Dependências do backend
│
└── README.md             # Documentação
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone [URL_DO_REPOSITÓRIO]
cd landing-page
```

2. Instale as dependências do backend:
```bash
cd backend
npm install
```

3. Instale as dependências do frontend:
```bash
cd ../frontend
npm install
```

### Executando o Projeto

1. Inicie o backend:
```bash
cd backend
npm run dev
```

2. Em outro terminal, inicie o frontend:
```bash
cd frontend
npm start
```

3. Para executar os testes:
```bash
cd backend
npm test
```

## 🔧 Scripts Disponíveis

### Backend
- `npm run dev`: Inicia o servidor em modo desenvolvimento
- `npm test`: Executa os testes unitários
- `npm run build`: Compila o projeto para produção

### Frontend
- `npm start`: Inicia o servidor de desenvolvimento
- `npm run build`: Compila o projeto para produção

## 📝 Funcionalidades

- Formulário de captura de leads com validação em tempo real
- Formatação automática de telefone
- Validação de email
- Feedback visual para o usuário
- Armazenamento seguro dos dados
- Interface responsiva e moderna

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes. 
