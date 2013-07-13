var express = require('express');

var app = express.createServer(express.logger());

fs.readFileSync('/bitstarter/index.html', function (err, data) {
  if (err) throw err;
  console.log(data);
});

buf = new Buffer(256)
data = buf.toString()

app.get('/', function(request, response) {
  response.send('data');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
 
