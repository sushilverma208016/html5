let express = require("express");

let webserver = express();

webserver.use ( express.static("images") );
webserver.use ( express.static("scripts") );

webserver.get ( "/p8", function(request,response){
    response.sendFile(__dirname + "\\page8.html");
});

webserver.get ( "/p9", function(request,response){
    response.sendFile(__dirname + "\\page9.html");
});

webserver.get ( "/p10", function(request,response){
    response.sendFile(__dirname + "\\page10.html");
});

webserver.post("/fileupload", function(request,response){
    response.end();
});

webserver.listen(4000);