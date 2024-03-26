# Usa la imagen base oficial de Node.js
FROM node:14

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos package.json y package-lock.json (si existe)
COPY rabbitmq-producer/package.json ./

# Instala las dependencias de la aplicación
RUN npm install
# Copia el resto de la aplicación
COPY ./rabbitmq-producer .

# Expone el puerto en el que se ejecutará la aplicación (si es necesario)
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
