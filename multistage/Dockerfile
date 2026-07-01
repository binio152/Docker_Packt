FROM node:22-alpine AS build
WORKDIR /app
COPY tsconfig.json .
COPY package*.json .
RUN npm ci
COPY src src
RUN npm run build

FROM node:22-alpine AS deps
WORKDIR /app
COPY package*.json .
RUN npm ci --omit=dev


FROM gcr.io/distroless/nodejs22
WORKDIR /app
ENV PORT=3636
COPY --from=build /app/dist .
COPY --from=deps /app/node_modules node_modules
CMD ["./index.js" ]