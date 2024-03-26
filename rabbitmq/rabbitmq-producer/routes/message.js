var express = require('express');
var router = express.Router();

var amqp = require('amqplib/callback_api');

const url = 'amqp://rabbitmq';
const queue = 'my-queue';

let channel = null;
function connectToRabbitMQ() {
  amqp.connect(url, function (err, conn) {
      if (err) {
          console.error('Failed to connect to RabbitMQ. Retrying in 5 seconds...');
          setTimeout(connectToRabbitMQ, 5000); // Reintentar la conexión después de 5 segundos
          return;
      }
      conn.createChannel(function (err, ch) {
          if (err) {
              console.error('Failed to create channel. Retrying in 5 seconds...');
              setTimeout(connectToRabbitMQ, 5000); // Reintentar la conexión después de 5 segundos
              return;
          }
          channel = ch;
          console.log('Connected to RabbitMQ.');
      });
  });
}

connectToRabbitMQ();

process.on('exit', code => {
    channel.close();
    console.log(`Closing`);
  });

router.post('/', function (req, res, next) {
    channel.sendToQueue(queue, new Buffer.from(req.body.message));
    res.status(200);
});

module.exports = router;
