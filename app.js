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

        const body = [];

        req.on('data', (chunk) => {

            console.log(chunk);
            body.push(chunk);

        })

        req.on('end', () => {

            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];

            fs.writeFile('message.txt', message, (err) => {

            res.statusCode = 302;
            res.setHeader('location', '/');
            return res.end(); 

            });

        });

 
    }

    // Setting header and content type
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