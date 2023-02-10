# Stage 1
FROM node:18-alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

# Stage 2
FROM node:18-alpine as production

WORKDIR /app

COPY --from=builder /app/package*.json ./

RUN npm i --omit=dev && npm install pm2 -g

COPY --from=builder /app/dist ./dist

EXPOSE 3001

CMD ["pm2-runtime", "/dist/main.js"]