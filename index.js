// Import the built-in 'http' module
const http = require('http');

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Set HTTP status and headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response body
  res.end(`Hello! You requested: ${req.url}\n`);
});

// Choose a port
const PORT = 3000;

// Start listening on the port
server.listen(PORT, () => {
  console.log(`Now 111 Server running at http://localhost:${PORT}/`);
});
