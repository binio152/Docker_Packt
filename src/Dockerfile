FROM node:trixie-slim

WORKDIR /app

COPY /src/package*.json .

RUN npm ci

COPY /src/index.js index.js
COPY /src/app.js app.js

EXPOSE 3000
CMD [ "node", "/app/index.js" ]

