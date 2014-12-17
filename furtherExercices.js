var http = require("http");

var server = http.createServer (function(request, response) {
  var path = request.url
  var pathA = path.split("/");
  console.log(path);

  if (pathA[1] === "add") {
    var num = parseInt(pathA[2]) + parseInt(pathA[3]);
    response.end("<html>" + num + "</html>");
  }
  else if (pathA[1] === "sub") {
    var num = parseInt(pathA[2]) - parseInt(pathA[3]);
    response.end("<html>" + num + "</html>");
  }
  else {
    var count = 0;
    for (var i = 0; i < path.length; i++) {
      if (path[i] === "s") {
        count++;
      }
    };
    response.end("<html>" + count + "</html>")
  };


});

server.listen(2000);
