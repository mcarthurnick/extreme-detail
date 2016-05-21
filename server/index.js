var express = require('express');
var bodyParser = require('body-parser');


var app = express();
var port = 5000;

app.use(bodyParser.json());
app.use(express.static(__dirname + './../client'));


app.listen(port, function() {
        console.log('listening on port', port);
      });
