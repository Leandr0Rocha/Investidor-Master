import axios from 'axios';

// Conexão fixa com o backend local
const api = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Função para criar instância com API key (para rotas protegidas)
export const apiWithKey = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': '' // Defina a chave se necessário
  }
});

export default api; 