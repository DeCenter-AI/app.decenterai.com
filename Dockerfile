# Build stage
FROM node:20 AS builder
WORKDIR /app

#COPY package*.json pnpm-lock.yaml ./

COPY . .

RUN sed -i '/provider = "prisma-client-js"/a \ \ binaryTargets = ["native", "linux-musl-openssl-3.0.x"]' prisma/schema.prisma

RUN npm install -g pnpm
RUN pnpm install


# Deploy stage
FROM node:20-alpine

ENV PORT=8080
ENV NODE_ENV="production"
ENV MODE="prod"
ENV DATABASE_URL=""

WORKDIR /app

EXPOSE $PORT

COPY --from=builder /app ./

CMD ["sh", "-c", "npm run test && npm run test:e2e"]

ENTRYPOINT ["npm", "run", "start:prod"]

LABEL maintainer="Hiro <laciferin@gmail.com>"
