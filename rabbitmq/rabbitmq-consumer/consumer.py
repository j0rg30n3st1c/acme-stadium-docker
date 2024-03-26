import pika
import time

host = 'rabbitmq'
queue = 'my-queue'

def on_message(ch, method, properties, body):
    message = body.decode('UTF-8')
    print(message)

def connect_to_rabbitmq():
    while True:
        try:
            connection_params = pika.ConnectionParameters(host=host)
            connection = pika.BlockingConnection(connection_params)
            return connection.channel()
        except pika.exceptions.AMQPConnectionError:
            print("Connection to RabbitMQ failed. Retrying in 5 seconds...")
            time.sleep(5)

def main():
    channel = connect_to_rabbitmq()
    channel.queue_declare(queue=queue)
    no_messages_prev = False

    while True:
        method_frame, _, body = channel.basic_get(queue=queue)
        if method_frame:
            print("Request received, sending to Paypal API. Message:", body.decode('UTF-8'))
            no_messages_prev = False
            channel.basic_ack(method_frame.delivery_tag)  # Confirma el mensaje
        else:
            if not no_messages_prev:
                print("No pending requests")
                no_messages_prev = True

        time.sleep(1)

if __name__ == '__main__':
    main()
