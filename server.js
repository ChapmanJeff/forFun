var express = require('express');
var bodyParser = require('body-parser');
var port = 8080;


var app = express();
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());


app.listen(port, function () {
	console.log('Listening on port ' + port);
})