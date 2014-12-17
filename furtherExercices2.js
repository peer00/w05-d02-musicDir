var http = require("http");

var paths = [];

var server = http.createServer (function(request, response) {
  var path = request.url

  // var pathA = path.split("/");
  console.log(path);

  paths.push(path);

  var count = 0;

  for (var i = 0; i < paths.length; i++) {
    if (paths[i] === path) {
      count++
    }
  }

  response.end("<html>" + count + "</html>");


});

server.listen(2000);
