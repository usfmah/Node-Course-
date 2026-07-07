const http = require('http');
const fs = require('fs');

// Callback function => executed when the request happens
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    // Home page
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');

        res.write(`
            <html>
                <head>
                    <title>Enter a message</title>
                </head>
                <body>
                    <form action="/message" method="POST">
                        <input type="text" name="message">
                        <button type="submit">Send</button>
                    </form>
                </body>
            </html>
        `);

        return res.end();
    } 
    if (url === '/message' && method === 'POST') {
        req.on( )

        fs.writeFileSync('message.txt', 'Nada');
        res.statusCode = 302;
        res.setHeader('location', '/');

        return res.end(); 
    }

    // Any other route
    res.setHeader('Content-Type', 'text/html');

    res.write(`
        <html>
            <head>
                <title>My Page</title>
            </head>
            <body>
                <h1>Hello Yusuf</h1>
            </body>
        </html>
    `);

    res.end();
});

// Listening for incoming requests
server.listen(3000);