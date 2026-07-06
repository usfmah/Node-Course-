const http = require('http');

// Callback function => executed when the request happens (to be executed later) 
const server = http.createServer((req, res) => {
    console.log(req.url, req.headers, req.method);

    //Setting the header type 
    res.setHeader('Content-Type', 'text/html');
    //setting the response content
    res.write("<html>");
    res.write("<body><h1>Hello Yusuf</h1></body>");
    res.write("</html>")
    res.end();
}); 


//listening for the incoming requests
server.listen(3000); 