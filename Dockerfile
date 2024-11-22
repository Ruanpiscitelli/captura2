# Etapa 1: Build
FROM node:18-alpine AS builder

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de configuração
COPY package*.json ./
COPY tsconfig*.json ./
COPY next.config.js ./
COPY postcss.config.js ./
COPY tailwind.config.ts ./

# Instala as dependências
RUN npm install

# Copia o código-fonte
COPY src ./src
COPY public ./public
COPY components ./components
COPY app ./app
COPY lib ./lib
COPY styles ./styles

# Build
RUN npm run build

# Etapa 2: Produção
FROM node:18-alpine

WORKDIR /app

# Copia arquivos necessários
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

# Configuração de ambiente
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

EXPOSE 3000

# Importante: Para Next.js, use npm start em vez de serve
CMD ["npm", "start"]
