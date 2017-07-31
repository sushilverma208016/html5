addEventListener ( "message", onMessage, false );

function onMessage ( e ) { 

    let result = e.data.x + e.data.y ;
    
    // this may be allowed by some browsers
    // window.console.log ( result) ;

    // window.XMLHttpRequest - allowed

    for ( let i = 0 ; i < 9999999999 ; i++ ) ; 

    // send the result to the main thread
    // or post it in the message queue of the main thread
    postMessage ( result ) ; 

}

