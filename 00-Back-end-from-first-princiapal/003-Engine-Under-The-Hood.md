# How Node.js Handles HTTP — The Engine Under the Hood

- Every thing between the **request** and **Callback running** is handled by event loop and streams.

## Event Loop

- The event loop is a while loop that runs as long as the app is alive.  

- node works on one thread, one process, and handles everything as it arrives, with these steps:
  ┌──────────────────────────────────────────────────────┐
    │                     EVENT LOOP                        │
    │                                                       │
    │  ┌──────────┐  ┌──────────┐  ┌──────────┐            │
    │  │  Timer   │  │   I/O    │  │  Call    │            │
    │  │  Queue   │→│ Callback │→│  back    │→ ...        │
    │  │          │  │  Queue   │  │  Queue   │            │
    │  └──────────┘  └──────────┘  └──────────┘            │
    _________________________________________________________

    - New request arrives → Node adds callback to queue
    - Event loop picks it up → runs your handler
    - Your handler returns → loop picks next callback

    Ex: Node sends the query to the database and does not wait. The event loop goes back to handling other requests. When the database responds, the OS notifies Node. Node's event loop picks up the response and continues your function which allows thousands of concurrent connections run with a single thread. 


## Streams:
 - The problem: the request body can be very large which can waste the memory.
 - The solution:  process data as it arrives, one chunk at a time.

 -  if the file reads faster than the network can send
 -  The readable stream has a buffer


## Sockets: 
- Below HTTP and streams, there's the TCP socket, When a browser connects, it creates a TCP socket. Node attaches the HTTP parser to that socket. 
- The parser reads bytes from the socket and turns them into the req object.