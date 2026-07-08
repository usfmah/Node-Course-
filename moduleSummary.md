## How the web works

- A client enters a URL, using A DNS it lookups for its domain, then the request is initated via a client towards a server. 

- The node code handle the incoming requests in addition to some db connections...etc

- The response is sent back to the client via the server, which can be some html, xml, json...etc which also have some headers (metadata) that describes what insise the request or response. 

- These requests and responses transmmition are handled via HTTP/HTTPS (some defiend rules).


## Nodejs program life cycle 
when we run the code, it starts a script which reads and executes the whole file, then it's managed by the event loop

### Event Loop 
It's a loop process which is managed by node js which keeps running as long as there is a work to do.
It keeps on running as long as there are event listeners registerd

It still run unless we unregister the event listener


## Parsing the requests:

- The request in node is read as chunks, so that we can work with individual chunk without waiting for the full request being read, and node do this because it does no in advance how complex the request is?

- Each incoming chunk is already a Buffer. If we need the complete request body, we store these Buffer chunks (for example, in an array), then combine them into a single Buffer using Buffer.concat(), and it's buffer because computer does not deal with strings. It deals with bytes. 


## Order of executuion
- node works asynchronously, the code does not be executed in the same order it's written, it stores the event listenrs internally and order them, and execute the functions when we need them, while it does not stop the rest of the code, it continute the execution, 

- The file can be written in a synchronous way which will block the rest of the code until it's done or asynchronous which will speed up the process 


## Notes

- JavaScript uses a single-thread, but the event loop is iniated with the starter of the code so that it handles the event callbacks 

- Event loop handles the callbacks while the fs operations are sent to worker pool, it handles the heavy work and runs on **multi-thread**.

-The connection between event loop and worker pool is when the heavy work is done the event loop it will triger the event loop related to this work.


- The event loop firstly checks if there is any setTimers then it checks other callback such as I/O, then it will check for poll events which it will retrive new I/O events, then it check if there is any setImmediate callbacks, then it checks any close callbacks, and it exit the process if there is no other callbacks