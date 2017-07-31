let http = require("http"); // require returns an object

function httpRequestHandler(request, response) { // to handle client's http requests
    let html = "<b>Hello</b>";
    response.end ( html ) ; // send the html with the response
}

// create a new web server using http library
let webserver = http.createServer ( httpRequestHandler ) ;

// start the listening to handle client's connection request
webserver.listen ( 1000 ); 
