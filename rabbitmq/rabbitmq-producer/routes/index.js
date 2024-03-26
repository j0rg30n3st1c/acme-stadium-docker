var express = require('express');
var router = express.Router();

function sendMessage() {
  console.log("10 requests sent")
  for(var i = 0; i<10 ; i++){
    var messageString="I'm a request"
    fetch('http://localhost:3000/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: messageString })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // O response.text() si esperas una respuesta de texto en lugar de JSON
    })
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  }
}
setInterval(sendMessage,20000)
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
