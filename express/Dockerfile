FROM node:trixie-slim

WORKDIR /app

COPY /package*.json .

RUN npm ci

COPY /index.js index.js
COPY /app.js app.js

EXPOSE 3000
CMD [ "node", "/app/index.js" ]

