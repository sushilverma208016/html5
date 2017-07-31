let express = require("express");

let webserver = express();

webserver.use ( express.static("images") );
webserver.use ( express.static("scripts") );

webserver.get ( "/", function(request,response){
    response.sendFile(__dirname + "\\page7.html");
});

webserver.listen(4000);