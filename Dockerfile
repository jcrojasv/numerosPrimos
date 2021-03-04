FROM node:12.13-alpine

WORKDIR /usr/src

COPY package*.json ./

RUN npm install

COPY . .
