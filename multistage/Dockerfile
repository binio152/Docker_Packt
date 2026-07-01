FROM node:22.21.1-alpine3.21 AS build
WORKDIR /app
COPY package*.json .
RUN npm ci


FROM gcr.io/distroless/nodejs22
WORKDIR /app
COPY --from=build /app/node_modules node_modules
COPY . .

ENV PORT=3000

# ENTRYPOINT [ "node" ]
CMD ["./index.js" ]