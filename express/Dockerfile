FROM node:trixie-slim

WORKDIR /app
ENV PORT=3636
ENV APP_NAME="binio152"

COPY package*.json .
RUN npm ci

COPY /src/index.js index.js
COPY /src/app.js app.js

CMD [ "node", "index.js" ]
