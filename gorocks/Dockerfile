FROM golang:1.20 AS gobuilder

COPY . /app

WORKDIR /app

RUN apt-get update && \ 
    apt search golang-go && \
    apt search gccgo-go && \
    apt-get install golang-go -y

FROM golang:1.20-alpine
WORKDIR /app
COPY --from=gobuilder /app /app
#RUN chown -R www-data:www-data /app

EXPOSE 8080

ENTRYPOINT [ "go", "run", "gorocks.go" ]