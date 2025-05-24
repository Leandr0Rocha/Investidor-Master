// Configuração do ambiente de teste
process.env.NODE_ENV = 'test';
process.env.PORT = 5001; // Porta diferente para testes
process.env.API_KEY = 'test_api_key';
 
// Silencia os logs durante os testes
jest.spyOn(console, 'log').mockImplementation(() => {});
jest.spyOn(console, 'error').mockImplementation(() => {});
jest.spyOn(console, 'warn').mockImplementation(() => {});
jest.spyOn(console, 'info').mockImplementation(() => {}); 