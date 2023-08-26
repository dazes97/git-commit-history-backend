FROM node:18-alpine AS builder
WORKDIR /app
COPY ./package.json ./
RUN yarn install
COPY . .
RUN yarn run build
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app ./
ARG SERVER_PORT=5000
ARG NODE_ENV=production
ENV SERVER_PORT=${SERVER_PORT}
ENV GITHUB_API_BASE_URL=https://api.github.com/repos/dazes97/
ENV ORIGIN_URL=http://localhost
ENV ORIGIN_PORT=3000
ENV NODE_ENV=${NODE_ENV}
EXPOSE ${SERVER_PORT}
CMD ["node", "dist/main"]