FROM postgres:14-alpine

COPY Sql-train.sql /docker-entrypoint-initdb.d

ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD="1234"
ENV POSTGRES_DB=Sql-train