FROM node:18-alpine

WORKDIR /app

# Copia tudo de uma vez
COPY . .

# Instala dependências
RUN npm install

# Build
RUN npm run build

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

EXPOSE 3000

CMD ["npm", "start"]
