var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 // response.send('Hello World 2!');
 //fs.readFileSync('index.html', [options]);
 var buf = fs.readFileSync('index.html', 'utf8');
 var text = buf.toString('utf8');
 response.send(text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});