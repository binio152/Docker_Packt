FROM node:trixie-slim

WORKDIR /app

COPY express/package*.json .
RUN npm ci

COPY /express/index.js index.js
COPY /express/app.js app.js

ENV PORT=3636
CMD [ "node", "index.js" ]
