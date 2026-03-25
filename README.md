# Master Investor
<img width="1919" height="876" alt="image" src="https://github.com/user-attachments/assets/e2197a3f-a973-42b6-918e-38170d568772" />

Landing page for lead capture with integrated management system. Prototype on **Figma**: https://www.figma.com/proto/kc41aH6iPx7sdpWppYCiIU/carlos-goodman?node-id=6-254

## 🚀 How to run the project

### Prerequisites
- Docker and Docker Compose
- Node.js (version 14 or higher) - for local development

### Option 1: Docker (Recommended)

1. Clone the repository:
```bash
git clone <repository-url>
cd Investidor-Master
```

2. Run the project:
```bash
docker-compose up --build
```

3. Access:
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5000

### Option 2: Development Local

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

## 📁 Project Structure

```
Investor-Master/
├── backend/ # Node.js/Express API
│ ├── src/
│ │ └── utils/
│ │ └── logger.js # Logging system
│ ├── server.js # Main server
│ ├── database.sqlite # SQLite database
│ └── package.json
├── frontend/ # React Application
│ ├── src/
│ │ ├── components/ # React Components
│ │ ├── services/ # API Services
│ │ ├── App.jsx
│ │ └── index.js
│ ├── public/ # Static Files
│ └── package.json
└── docker-compose.yml # Docker Configuration

```

## 🛠️ Technologies Used

### Backend
- **Node.js** with Express
- **SQLite** for database
- **Winston** for logs
- **Helmet** for security
- **CORS** for communication with the frontend

### Frontend
- **React 18** with React Scripts
- **Tailwind CSS** for styling
- **Axios** for HTTP requests

## 📊 Features

- ✅ Responsive landing page
- ✅ Lead capture form
- ✅ Testimonial system
- ✅ Interactive FAQ
- ✅ Instructor section
- ✅ REST API for lead management
- ✅ Logging system
- ✅ Duplicate email validation

## 🔧 Available Scripts

### Backend
```bash npm run dev # Development with nodemon
npm start # Production
npm run lint # Check code
npm run lint:fix # Fix problems lint
```

### Frontend
```bash
npm start # Development
npm run build # Production build
```

### Full-Stack Development
```bash
# In the backend directory
npm run dev:all # Backend + Frontend simultaneously
```

## 🐳 Docker

### Stop the project
```bash
docker-compose down
```

### Rebuild after changes
```bash
docker-compose up --build
```

## 📝 Notes

- The SQLite database is persisted in the container
- Logs are saved in `backend/logs/`
- The frontend communicates with the backend via `REACT_APP_API_URL`
- Logging system configured with Winston
- Automatic validation of duplicate emails

## 🤝 Contribution

1. Fork the Project
2. Create a branch for your feature (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
