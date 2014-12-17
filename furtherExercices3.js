var http = require("http");

var favcolors = {sean: "purple", sarah: "white", lisa: "black", john: "green", david: "turquoise"};

var fav_keys = Object.keys(favcolors);

var server = http.createServer (function(request, response) {
  var path = request.url;
  var pathA = path.split("/");

  var func = function() {
    for (var i = 0; i < fav_keys.length; i++) {
      if (fav_keys[i] === pathA[1]) {
        return fav_keys[i].toString();
      }
    };
  };

  if (pathA[1] === func()) {
    response.end("<html>" + favcolors[func()] + "</html>");
  };

});

server.listen(2000);
