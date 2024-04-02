# Usa la imagen base oficial de Python
FROM python:alpine3.19

# Instala las dependencias necesarias
RUN pip install pika

# Establece el directorio de trabajo
WORKDIR /app

# Ejecuta el script Python al iniciar el contenedor
CMD ["python", "-u", "app.py"]
