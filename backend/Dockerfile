# Stage 1
FROM node:16-alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

# Stage 2
FROM node:16-alpine as production

WORKDIR /app

COPY --from=builder /app/package*.json ./

COPY --from=builder /app/ecosystem.config.js ./

RUN npm ci --omit=dev && npm i pm2 -g

COPY --from=builder /app/dist ./dist

EXPOSE 3001

CMD ["pm2-runtime", "start", "ecosystem.config.js"]