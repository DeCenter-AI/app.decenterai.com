# Build stage
FROM node:20 AS builder
WORKDIR /app

#COPY package*.json pnpm-lock.yaml ./

COPY . .

RUN npm install -g pnpm
RUN pnpm install


# Deploy stage
FROM node:20-alpine


ENV NODE_ENV="production"
ENV MODE="prod"

WORKDIR /app


COPY --from=builder /app ./

LABEL maintainer="Hiro <laciferin@gmail.com>"
LABEL org.opencontainers.image.source https://github.com/Nasfame/hardhat-template
LABEL org.opencontainers.image.title "Hardhat-Template"
LABEL org.opencontainers.image.description="Hardhat-Template is a ready-to-use repository for web3 developers, providing a seamless environment for decentralized application (Dapp) development using Hardhat. It includes smart contract development, testing, deployment scripts, and an example frontend for easy interaction with deployed smart contracts."
LABEL org.opencontainers.image.licenses Apache-2.0
LABEL org.opencontainers.image.url https://github.com/Nasfame/hardhat-template
