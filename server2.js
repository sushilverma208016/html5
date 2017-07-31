let express = require ( "express" );
let bodyParser = require('body-parser')

// create new web server
let webserver = express() ; 

webserver.use(express.static("images"));
webserver.use(express.static("scripts"));

// helps deserializing the JSON formatted String to JS objects
webserver.use(bodyParser.json()) ; 

webserver.post ( "/save/drawing", function(request,response) {
    setTimeout ( function() {
        console.log ( request.body ) ;
        response.send("Data Saved");
        response.end();
    }, 5000);
});

webserver.get ( "/p1", function(request, response) {
    response.sendFile ( __dirname + "\\page1.html" ); 
});

webserver.get ( "/p2", function(request, response) {
    response.sendFile ( __dirname + "\\page2.html" ); 
});

webserver.get ( "/p3", function(request, response) {
    response.sendFile ( __dirname + "\\page3.html" ); 
});

webserver.get ( "/p4", function(request, response) {
    response.sendFile ( __dirname + "\\page4.html" ); 
});

// code runs on server
webserver.get ( "/", function(request, response) {
    response.send ( "This is Home Page" );
}) ;

// code runs on server
webserver.get ( "/about", function(request, response) {
    response.send ( "This is About Page" );
}) ;

// code runs on server
webserver.get ( "/contact", function(request, response) {
    response.send ( "This is Contact Page" );
}) ;

// start listening socket
webserver.listen(2000);