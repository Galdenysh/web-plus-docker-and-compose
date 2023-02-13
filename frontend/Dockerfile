# Stage 1
FROM node:18-alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

# Stage 2
FROM nginx:1.23.1-alpine as production

COPY --from=builder /app/build /usr/share/nginx/html

COPY --from=builder /app/nginx/conf.d/default.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]