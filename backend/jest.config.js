module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  collectCoverageFrom: [
    'server.js',
    'src/**/*.js',
    '!**/node_modules/**',
    '!**/coverage/**'
  ],
  testMatch: ['**/__tests__/**/*.test.js'],
  verbose: true
}; 