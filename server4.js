let express = require("express");

let webserver = express();

webserver.use ( express.static("media") );

webserver.get ( "/", function(request,response){
    response.sendFile(__dirname + "\\page6.html");
});

webserver.listen(4000);