# DNS - TCP  — How Your Request Actually Reaches the Server

- HTTP does not travel on its own, it needs a transport. 


### Full path of request:

- DNS Lookup - find the IP address for the domain. 

- TCP Handshake - openning the connection to this IP. 

- TLS Handshake (if HTTPS) - encrypting the connection. 

- HTTP Request - send GET / Products request. 

- Server Processes - node (or any language) handles it. 

- HTTP Response - server sends data back. 

- Connection Closes or accpets other requests. 

### How DNS Works:

- It maps the human-friendly domain to the computer-friendly domain, when the browser asks for a IP

- Firstl, it checks the cache.
- If it's not cached it asks the Recursive Resolver.
- Recursive Resolver asks the "Root Nameserver", for ex. who handles .com?
- when it's refferd it asks who handles "domain.com". 
-  when it's refferd it asks what is the IP of "domain.com".
-  Resolver gives IP back to browser.
-  Browser caches it (often for 60-300 seconds)


#### DNS Records:

- A => Maps domain to IPv4 address.

- AAAA => Maps domain to IPv6 address.

- CNAME => Maps domain to another domain (alias)

- MX => Maps to mail server

- TXT => Arbitrary text (used for verification, SPF)

## TCP:

 **The Problem:**
IP (Internet Protocol) is unreliable. Packets can be lost, duplicated, or arrive out of order. TCP (Transmission Control Protocol) sits on top of IP and guarantees:
- All data arrives — lost packets are retransmitted
- In order — out-of-order packets are re-sequenced
- Without corruption — checksum verification
- With flow control — slow down if receiver is overwhelmed


### Three-Way Handshake

- we use it so that both of server and client can make sure that they are reachable. 

```text
CLIENT                                              SERVER
  |                                                    |
  | --- SYN (seq=100) -------------------------------> |
  |     "I want to establish a connection."            |
  |                                                    |
  | <--- SYN-ACK (seq=200, ack=101) ------------------ |
  |      "Connection accepted."                        |
  |                                                    |
  | --- ACK (seq=101, ack=201) ----------------------> |
  |      "Acknowledged. Ready to communicate."         |
  |                                                    |
  |=========== TCP CONNECTION ESTABLISHED ============>|
  |                                                    |
  | --- HTTP GET /products --------------------------> |
  |                                                    |
  | <--- HTTP/1.1 200 OK ---------------------------- |
  |                                                    |
```


### DNS VS UDP 

- DNS gurantee delivary ordring while UDP does not. 
- UDP is faster than DNS, so it's better in the video streaming, gaming.
- UDP Overhead is lower then TCP. 

- DNS uses UDP, While HTTP uses TCP.


## TLS (Transport Layer Security):

- TCP handshake completes.
- Client: "Here's my supported cipher suites, here's a random number".
- Server: "Here's my certificate (public key), here's my random number".
- Client verifies certificate against trusted CA list. 
- Both derive a shared session key (asymmetric crypto → symmetric). 
- All further data is encrypted with the session key.



