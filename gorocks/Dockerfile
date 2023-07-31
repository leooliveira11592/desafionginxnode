FROM golang:1.20 AS gobuilder

WORKDIR /app

COPY . .

RUN ls && go build -o /main gorocks.go

FROM scratch
WORKDIR /
COPY --from=gobuilder /main /main

EXPOSE 8080

ENTRYPOINT ["/main"]