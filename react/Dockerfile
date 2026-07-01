FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json .
RUN npm ci

COPY .oxlintrc.json .
COPY tsconfig*.json .
COPY vite.config.ts .
COPY index.html .
COPY src src

RUN npm run build

FROM nginx:1.27.0

COPY --from=build /app/dist /usr/share/nginx/html

