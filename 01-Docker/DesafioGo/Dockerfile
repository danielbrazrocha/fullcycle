FROM golang:1.19-alpine AS builder

# Set destination for COPY
WORKDIR /app

# Download Go modules
COPY go.mod ./


# Copy the source code. Note the slash at the end, as explained in
# https://docs.docker.com/reference/dockerfile/#copy
COPY *.go ./

# Build without debug
RUN go build -ldflags="-s -w" -o 01-docker-desafio-go

# Etapa final com imagem mínima
# remove shell, libs, etc
FROM scratch

COPY --from=builder /app/01-docker-desafio-go /01-docker-desafio-go

# Optional:
# To bind to a TCP port, runtime parameters must be supplied to the docker command.
# But we can document in the Dockerfile what ports
# the application is going to listen on by default.
# https://docs.docker.com/reference/dockerfile/#expose
EXPOSE 8080

# Run
ENTRYPOINT ["/01-docker-desafio-go"]