var http = require("http");

var server = http.createServer (function(request, response) {
  var path = request.url
  var pathA = path.split("/");
  console.log(path);

  if (pathA[1] === "artists" && pathA[2] === "") { //artists/
    response.end("<html>"+ htmlGen.artists(artistAlbums) + "<p><a href=/artists/>artists</a></p></html>");
  }
  else if (path.slice(0,15) === "/artists/artist" && pathA[3] === "") { //artists/artistx/
    var msg = htmlGen.albums(artistAlbums,pathA[2]);
    response.end("<html>"+ msg + "<p><a href=/artists/>artists</a></p></html>");
  }
  else if (path.slice(0,15) === "/artists/artist" && pathA[3] !== "") { //artists/artistx/albumx/
    var msg = htmlGen.songs(albumSongs,pathA[3]);
    response.end("<html>"+ msg + "<p><a href=/artists/" + pathA[2] + "/>" + pathA[2] + "</a></p><p><a href=/artists/>artists</a></p></html>");
  }
  else if (path.slice(0,1) === "/") { //root
    response.end("<html><a href=/artists/>artists</html>")
  }


});

server.listen(2000);

var html = function() {
  var htmlGen = {
    artists : function(obj) {
      var liArray = [];
      var objKeys = Object.keys(obj);
      for (var i = 0; i < objKeys.length; i++) {
        liArray.push("<li><a href=/artists/" + objKeys[i] + "/>" + objKeys[i] + "</a></li>");
      }
      return liArray.join("");
    },
    albums : function(obj,artist) {
      var liArray = [];
      var objKeys = Object.keys(obj);
      for (var i = 0; i < objKeys.length; i++) {
        liArray.push("<li><a href=/artists/" + artist + "/" + obj[artist][i] + "/>" + obj[artist][i] + "/</a></li>");
      }
      return liArray.join("");
    },
    songs : function(objS,album) {
      var liArray = [];
      for (var i = 0; i < objS[album].length; i++) {
        liArray.push("<li>" + objS[album][i] + "</li>");
      }
      return liArray.join("");
    },
  }
  return htmlGen;
};


var artistAlbums = {
  artist1 : ["album1_1","album1_2","album1_3"],
  artist2 : ["album2_1","album2_2","album2_3"],
  artist3 : ["album3_1","album3_2","album3_3"],

};

var albumSongs = {
  album1_1 : ["song1","song2","song3"],
  album1_2 : ["song1","song2","song3"],
  album1_3 : ["song1","song2","song3"],
  album2_1 : ["song1","song2","song3"],
  album2_2 : ["song1","song2","song3"],
  album2_3 : ["song1","song2","song3"],
  album3_1 : ["song1","song2","song3"],
  album3_2 : ["song1","song2","song3"],
  album3_3 : ["song1","song2","song3"],
};

var htmlGen = html();
