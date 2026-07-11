const http = require('http');
const routes = require('./routes');

const express = require('express')

const app = express();

// app.use() registers a middleware function in Express.
app.use((req, res, next) => {
    console.log("in the middleware");
    next();
});

app.use((req, res, next) => {
    console.log("In another middleware!"); 
    res.send('<h1>Hello from Express!</h1>');
});


// Callback function => executed when the request happens
const server = http.createServer(app);

// Listening for incoming requests
server.listen(3000);