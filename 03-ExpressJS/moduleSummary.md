## Express.js

• Express.js is Node.js framework – a package that adds a bunch of utility functions and tools and a clear set of rules on how the app should be built (middleware!)

## MiddleWare:

- Middleware means some of autmation to the incoming request by some of functions instead of just one request handler does everything (Core Concept of Express js). 

- It's a middleware between the request and response

- Using `
app.use('/',(req, res, next) => {});
```js means that the path starts with the slash 