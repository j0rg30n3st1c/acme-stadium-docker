# Utiliza la imagen base oficial de Golang
FROM golang:alpine3.19

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /go/src/app

# Copia todos los archivos Go al directorio de trabajo del contenedor
COPY pasarela_pago/*.go ./

# Genera el archivo go.mod
RUN go mod init

# Descarga e instala las dependencias del proyecto (si las hay)
RUN go mod tidy

# Compila la aplicación Go
RUN go build -o main .

# Indica que la aplicación se ejecutará en el contenedor
CMD ["./main"]
