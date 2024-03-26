var express = require('express');
var router = express.Router();
const request = require('request');

function sendMessage() {
  console.log("10 requests sent")
  for(var i = 0; i<10 ; i++){
    var messageString="I'm a request"
    const options = {
      url: 'http://producer:3000/message',
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: messageString })
    };

    request(options, (error, response, body) => {
        if (error) {
            console.error('Error:', error);
        } else {
            if (response.statusCode !== 200) {
                console.error('Network response was not ok');
            } else {
                const data = JSON.parse(body);
                console.log(data);
            }
        }
    });
  }
}
setInterval(sendMessage,20000)
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
