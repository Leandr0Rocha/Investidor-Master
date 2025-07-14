FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY .env .env
COPY . .
EXPOSE 5000
CMD ["node", "server.js"] 