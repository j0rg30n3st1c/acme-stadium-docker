# Usa la imagen base oficial de Python
FROM python:3

# Copia el código Python al contenedor
COPY rabbitmq-consumer/consumer.py /app/app.py

# Instala las dependencias necesarias
RUN pip install pika

# Establece el directorio de trabajo
WORKDIR /app

# Ejecuta el script Python al iniciar el contenedor
CMD ["python", "-u", "app.py"]
