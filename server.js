const express = require('express');
const { createServer } = require('http');
const next = require('next');
const { Server } = require('socket.io'); // Corrected import for socket.io
const { parse } = require('url');
const rateLimit = require('express-rate-limit');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const NextHandler = nextApp.getRequestHandler();
const expressApp = express();

const rateLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // Track over 24 hours
  max: 7, // limit each IP to 7 requests per windowMs
  handler: (req, res, /*next,*/ options) => {
    if (req.rateLimit.count > 3) {
      // After 3 attempts, block access for 12 hours
      res.set('Retry-After', 12 * 60 * 60); // in seconds
      res.status(429).json({
        message: 'Access blocked due to repeated attempts. Please try again after 12 hours.',
      });
    } else {
      // Continue with the default behavior otherwise
      res.status(options.statusCode).json({
        message: options.message,
      });
    }
  },
});

nextApp.prepare().then(() => {
  const server = createServer(expressApp);
  const io = new Server(server); // Corrected instantiation for socket.io
  let connectedUsers = 0; // Initialize connected users count

  io.on('connection', (socket) => {
    connectedUsers++; // Increment on new connection
    console.log('Connected:', socket.id, 'Total Connected Users:', connectedUsers);

    socket.on('disconnect', () => {
      connectedUsers--; // Decrement on disconnect
      console.log('Disconnected:', socket.id, 'Total Connected Users:', connectedUsers);
    });
  });
  
  expressApp.use('/custom', (req, res) => {
    res.json({ message: 'This is a custom API route.', connectedUsers: connectedUsers });
  });

  expressApp.all('*', (req, res) => {
    return NextHandler(req, res);
  });

  server.listen(3001, () => {
    console.log('Server running on http://localhost:3001');
  });
});