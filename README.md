# Докеризация приложения КупиПодариДай

## О проекте

Приложение КупиПодариДай. В нём каждый зарегистрированный пользователь может рассказать о том, какой подарок он бы хотел получить, а также скинуться на подарок для другого пользователя, указав сумму, которую готов на это потратить.

## Ссылки на проект

IP адрес 51.250.26.39

Frontend https://galdenysh.nomoredomains.work

Backend https://api.galdenysh.nomoredomains.work

## Технологии

Проект написан с использование технологий:

- React
- NestJS
- TypeORM
- PostgreSQL
- Docker

## Начало работы

Для запуска приложения необходимы Docker и Docker Compose. Из корня директории введите:

```
docker compose up -d
```

## Переменные окружения

Для работы проекта необходимо указать следующие переменные окружения:

- PORT
- JWT_SECRET
- JWT_EXPIRES
- POSTGRES_TYPE
- POSTGRES_HOST
- POSTGRES_PORT
- POSTGRES_USER
- POSTGRES_PASSWORD
- POSTGRES_DB
- POSTGRES_SYNCHRONIZE
- PGDATA

Если не указать переменные, то будут использованы значения по умолчанию.