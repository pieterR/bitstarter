var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 // response.send('Hello World 2!');
 //fs.readFileSync('index.html', [options]);
 var buf = new Buffer(utf8string);
 buf = fs.readFileSync('index.html', 'utf8');
 String text = buf.toString('utf8');
 response.send(text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});