# Utiliza la imagen base oficial de Golang
FROM golang:latest

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /go/src/app

# Copia el código fuente de la aplicación al directorio de trabajo del contenedor
COPY api_paypal.go .

# Genera el archivo go.mod
RUN go mod init

# Descarga e instala las dependencias del proyecto (si las hay)
RUN go mod tidy

# Compila la aplicación Go
RUN go build -o main .

# Indica que la aplicación se ejecutará en el contenedor
CMD ["./main"]
