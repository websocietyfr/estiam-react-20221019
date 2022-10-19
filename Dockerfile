FROM node:16-alpine

RUN npm install -g create-react-app
WORKDIR /app

COPY . .

EXPOSE 3000