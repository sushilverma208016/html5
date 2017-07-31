let expresslib = require("express");
let expressserver = expresslib(); 
// expressserver provides URL routing
// expressserver internally creates httpserver

let httplib = require("http");
let httpserver = httplib.Server(expressserver); 
// obtain httpserver used by expressserver

let socketiolib = require("socket.io") ; 
let websocketserver = socketiolib(httpserver); 
// enable the httpserver used by expressserver with websockets

websocketserver.on('connection', onConnection);

// this function is called for every browser that creates WebSocket connection 
function onConnection(socket) {

    // on is called for each browser, on is like a loop that waits for the browser
    // to send request, on has callback function as the second parameter that 
    // is called when data comes on web socket 
    socket.on('drawing', (data) => socket.broadcast.emit('drawing', data));

}

// on http connections we can't do push from the server
// because there might be no connection between client and server
// this nature of HTTP makes it highly scalable 
// for handling HTTP request
expressserver.get ( "/", function(request,response) {
    response.sendFile ( __dirname + "\\page5.html");
});

httpserver.listen(3000); 
// webserver with websocket support will start listening
// now http:// and ws:// both are supported
