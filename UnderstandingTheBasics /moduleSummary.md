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