import express, {Response, Request, Express, NextFunction} from 'express';
import { z } from "zod";
import { createServer } from 'http';
import next from 'next';
import { Server } from 'socket.io'; // Corrected import for socket.io
import { parse } from 'url';
import rateLimit, {RateLimitExceededEventHandler} from 'express-rate-limit';
import crypto from 'crypto';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';
import { runTests } from './src/dharmaOS/scripts/runTests.ts'

// const { LangChain, LangChainOpenAIAdapter, LangChainLogger } = require('@langchain/core');
// const { ChatOpenAI } = require("@langchain/openai");
// const { ChatAnthropic } = require("@langchain/anthropic");
// const { RunnableSequence } = require("@langchain/core/runnables");
// const { PromptTemplate } = require("@langchain/core/prompts");
// const { StructuredOutputParser } = require("langchain/output_parsers");
// const { StringOutputParser, BaseOutputParser } = require("@langchain/core/output_parsers");


// import { ChatAnthropic } from "langchain/chat_models/anthropic";


// Initialize LangChain with OpenAI Adapter
// const langChain = new LangChain(new LangChainOpenAIAdapter({
//   apiKey: process.env.OPENAI_API_KEY,
// }));

// // Optional: Add a logger to LangChain for debugging purposes
// langChain.use(new LangChainLogger());

// Define a custom operation using LangChain
// async function customLangChainOperation(inputText) {
//   try {
//     // Example of using LangChain for a retrieval operation
//     const retrievalResult = await langChain.retrieval.retrieve({
//       query: inputText,
//       context: "Your custom context or instructions for the retrieval operation",
//     });
//     console.log('Retrieval Result:', retrievalResult);

//     // Example of using LangChain for a model I/O operation
//     const modelIOResult = await langChain.modelIO.predict({
//       prompt: inputText,
//       maxTokens: 100,
//     });
//     console.log('Model I/O Result:', modelIOResult);

//     // Example of using LangChain for an agent operation
//     const agentResult = await langChain.agents.run({
//       agentName: "YourAgentName",
//       input: {
//         prompt: inputText,
//         parameters: {
//           // Agent-specific parameters
//         },
//       },
//     });
//     console.log('Agent Result:', agentResult);

//     return { retrievalResult, modelIOResult, agentResult };
//   } catch (error) {
//     console.error('Error in customLangChainOperation:', error);
//     throw error;
//   }
// }

// const inputText = "What are the main causes of global warming?";

// // Custom operation using LangChain for knowledge retrieval
// async function customKnowledgeRetrievalOperation(inputText) {
//   try {
//     // Use LangChain's retrieval module to fetch relevant context
//     const retrievalResult = await langChain.retrieval.retrieve({
//       query: inputText,
//       context: "Environmental science articles and research papers",
//     });
//     console.log('Retrieval Result:', retrievalResult);

//     // Further processing with the retrieved context...
//   } catch (error) {
//     console.error('Error in customKnowledgeRetrievalOperation:', error);
//     throw error;
//   }
// }

// customKnowledgeRetrievalOperation(inputText);

// // Example usage of the customLangChainOperation
// // Note: This is just for demonstration and should be called appropriately within your application logic
// customLangChainOperation("Example input text to process with LangChain")
//   .then(result => console.log('Custom LangChain Operation Result:', result))
//   .catch(error => console.error('Custom LangChain Operation Error:', error));



const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const NextHandler = nextApp.getRequestHandler();
const expressApp = express();

import { PrismaClient } from './prisma/generated/app';
const appClient = new PrismaClient();

function createRateLimiter({
  windowMs = 24 * 60 * 60 * 1000, // 24 hours
  max = 7, // limit each IP to 7 requests per windowMs
  limitBeforePenalty = 3, // After 3 attempts, apply penalty
  penaltyDuration = 12 * 60 * 60, // 12 hours in seconds
  penaltyMessage = 'Access blocked due to repeated attempts. Please try again after 12 hours.',
} = {}) {
  return rateLimit({
    windowMs,
    max,
    handler: (req:any, res, next) => {
      if (req.rateLimit.count > limitBeforePenalty) {
        res.set('Retry-After', penaltyDuration as any);
        res.status(429).json({
          message: penaltyMessage,
        });
      } else {
        res.status(429).json({
          message: 'You have exceeded the request limit. Please try again later.',
        });
      }
    },
  });
}

nextApp.prepare().then(() => {
  const server = createServer(expressApp);
  const io = new Server(server); // Initialize Socket.io server
  let connectedUsers = 0; // Initialize connected users count

  // Listen for new connections and disconnections to keep track of connected users
  io.on('connection', (socket) => {
    connectedUsers++; // Increment on new connection
    console.log('Connected:', socket.id, 'Total Connected Users:', connectedUsers);

    // Listen for disconnections to decrement the connected users count
    socket.on('disconnect', () => {
      connectedUsers--; // Decrement on disconnect
      console.log('Disconnected:', socket.id, 'Total Connected Users:', connectedUsers);
    });
  });

  expressApp.use(express.json()); // Middleware to parse JSON bodies. This is necessary for Express to read JSON payloads from requests.
  expressApp.use(cookieParser()); // Middleware to parse cookies from the HTTP headers. This is necessary for Express to handle cookies in requests.

  // expressApp.post('/test', async (req: Request, res:Response) => {
    
  // });

  expressApp.post('/signup', createRateLimiter(), async (req: Request, res:Response) => {
    console.log('Signup attempt received');
    const { email, password } = req.body;
    console.log(`Processing signup for email: ${email}`);
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(`Password hashed for email: ${email}`);
    try {
      console.log(`Attempting to create user with email: ${email}`);
      const user = await appClient.user.create({
        data: {
          email,
          hashedPassword,
        },
      });
      console.log(`User created successfully: ${user.email}`);
      res.status(201).send('User created successfully');
    } catch (error: any) {
      console.error(`Error creating user: ${error.message}`);
      res.status(400).send('Error creating user');
    }
  });

  expressApp.post('/login', createRateLimiter(), async (req: Request, res:Response) => {
    console.log('@login');

    const { email, password } = req.body;
    if (!email || !password) {
      console.error('Login attempt with empty email or password');
      return res.status(400).send('Email and password are required');
    }
    
    type UserType = ReturnType<typeof appClient.user.findUnique> extends Promise<infer R> ? R : never;
    const user:UserType = await appClient.user.findUnique({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.hashedPassword || ""))) {
      console.error(`Failed login attempt for ${email}`);
      return res.status(401).send('Invalid email or password');
    }

    const antiCSRFToken = crypto.randomBytes(64).toString('hex'); // Generate anti-CSRF token
    
    // Store the hashed session token in the database for security
    const sessionToken = generateSessionToken();
    // console.log(`Session Token: ${sessionToken}`);
    const hashedSessionToken = crypto.createHash('sha256').update(sessionToken).digest('hex');
    // console.log(`Hashed Session Token: ${hashedSessionToken}`);
    
    try {
      await appClient.session.create({
        data: {
          userId: user.id,
          hashedSessionToken,
          antiCSRFToken: antiCSRFToken, // Store the plain anti-CSRF token
          expiresAt: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
        },
      });
    } catch (error) {
      console.error(`Failed to create session for user ${user.id}`, error);
      return res.status(500).send('An error occurred while logging in');
    }

    // Send the session token as a secure, HttpOnly cookie
    res.cookie('XSRF-TOKEN', antiCSRFToken, { secure: true, sameSite: 'strict' });
    res.cookie('sessionToken', sessionToken, { httpOnly: true, secure: true, sameSite: 'strict' });
    // Redirect to the root page after successful login
    res.status(200).redirect('/');
  });

  expressApp.post('/logout', async (req: Request, res:Response) => {
    const sessionToken = req.cookies.sessionToken;
    // Assuming you have a way to retrieve the session ID or use the session token directly
    await appClient.session.delete({
      where: {
        // This assumes you have a straightforward way to identify the session; adjust as necessary
        hashedSessionToken: crypto.createHash('sha256').update(sessionToken).digest('hex'),
      },
    });

    // Clear the session and CSRF token cookies
    res.clearCookie('sessionToken');
    res.clearCookie('XSRF-TOKEN');
    res.status(200).send('Logged out successfully');
  });

  // Handle all requests to the '/custom' route
  expressApp.get('/custom', (req: Request, res:Response) => {
    const routes = getRoutes(expressApp)
    // console.log('routes:', routes); // Log the request body for debugging
    
    console.log('Custom API route hit with body:', req.body); // Log the request body for debugging
    res.status(200).json({ 
      message: 'This is a custom API route.', 
      routes: routes 
    });
  })

  expressApp.get('/protected', verifySession, (req: Request, res:Response) => {
    console.log('Custom API route hit with body:', req.body); // Log the request body for debugging
    // Respond with a custom message and the current number of connected users
    res.status(200).json({ message: 'This is a protected API route.', connectedUsers: connectedUsers });
  })

  expressApp.get('/run_tests', async (req: Request, res:Response) => {
    try {
      const results = await runTests();
      // const results = "await runTests();"
      res.json(results);
    } catch (error) {
      res.status(500).send('Error running tests');
    }

  })

  expressApp.get('/getApp', async (req: Request, res:Response) => {
    try {
      const dao = await appClient.dao.findUnique({
        where: {
          id: 1,
        },
      });

      const dharmaBeing = await appClient.dharmabeing.findUnique({
        where: {
          id: 1,
        },
      });

      res.status(200).json({ 
        dao, 
        dharmaBeing 
      });
    } catch (error) {
      console.error('Failed to fetch DAO and Dharma Bean', error);
      res.status(500).send('Failed to fetch DAO and Dharma Bean');
    }
  });
  
  expressApp.post('/updateApp', async (req: Request, res:Response) => {
    try {

      const {dao, dharmabeing} = JSON.parse(req.body);

      // Update the database records for DAO and Dharma Bean with ID of 1 if they have been changed
      if (dao) {
        await appClient.dao.update({
          where: { id: 1 },
          data: { ...dao },
        });
      }
      if (dharmabeing) {
        await appClient.dharmabeing.update({
          where: { id: 1 },
          data: { ...dharmabeing },
        });
      }
      res.status(200)
    } catch (error) {
      console.error('Failed to update DAO and Dharma Bean', error);
      res.status(500).send('Failed to update DAO and Dharma Bean');
    }
  });

  // NEXTJS
  // Middleware to track API usage and performance
  expressApp.all('*', energyMiddleware, (req: Request, res:Response) => {
    const parsedUrl = parse(req.url, true);
    // Pass the request to Next.js handler after the middleware
    return NextHandler(req, res , parsedUrl);
  });

  // Start the server on port 3001
  server.listen(3001, () => {
    console.log('Server running on http://localhost:3001');
  });
});


/**************************************************
************      Middleware      ****************
***************************************************/

// Middleware to monitor and log the API's performance and resource usage
const energyMiddleware = (req: Request, res:Response, next:NextFunction) => {
  console.log(`@energyMiddleware`);

  // Capture the start time, CPU, and memory usage before processing the request
  const startUsage = process.cpuUsage();
  const startMem = process.memoryUsage();
  const startTime = Date.now();

  // After the response is sent, calculate and log the usage metrics
  res.on('finish', () => {
    const duration = Date.now() - startTime; // Calculate request processing time
    const endUsage = process.cpuUsage(startUsage); // Calculate CPU usage
    const endMem = process.memoryUsage(); // Capture end memory usage

    // Log the calculated metrics for monitoring
    // console.log(`Request Processing Time: ${duration}ms`);
    // console.log(`CPU Usage: ${endUsage.user + endUsage.system} microseconds`);
    // console.log(`Memory Usage: From ${startMem.rss} to ${endMem.rss} bytes`);
  });

  next(); // Proceed to the next middleware or request handler
};

async function verifySession(req: Request, res:Response, next:NextFunction) {
  console.log('Verifying session...'); // Added logging
  const sessionToken = req.cookies.sessionToken;
  console.log(`Session token received: ${sessionToken}`);
  if (!sessionToken) {
    console.log('Session token not provided.'); // Added logging
    return res.status(401).send('No session token provided');
  }

  try {
    // Find the session by the hashed version of the token
    const hashedSessionToken = crypto.createHash('sha256').update(sessionToken).digest('hex');
    console.log(`hashedSessionToken: ${hashedSessionToken}`);

    const session = await appClient.session.findFirst({
      where: {
        hashedSessionToken,
      },
      include: {
        user: true, // Include user information if needed
      },
    });

    if (!session) {
      console.log('Session token is invalid.'); // Added logging
      return res.status(401).send('Invalid session token');
    }

    // Optionally, check if the session has expired

    console.log(`Session verified for user ID: ${session.userId}`); // Added logging
    res.locals.user = session.user; // Attach user information to the res.locals object
    next();
  } catch (error) {
    console.error('Error verifying session:', error); // Added logging
    return res.status(500).send('Internal server error');
  }
}

/**************************************************
************      HELPERS      ****************
***************************************************/

function generateSessionToken() {
  console.log('Generating session token...'); // Added logging
  // This line generates a buffer of 64 bytes of cryptographically strong pseudo-random data
  // and then converts that buffer into a string of hexadecimal characters.
  // This method is often used to create unique session tokens or other identifiers
  // that require a high degree of randomness to ensure security.
  return crypto.randomBytes(64).toString('hex');
}

function getRoutes( app: Express ) {
  const routes: string[] = [];

  app._router.stack.forEach((middleware: any) => {
    if (middleware.route) { // If it's a route middleware
      const methods = Object.keys(middleware.route.methods).map(method => method.toUpperCase()).join(', ');
      routes.push(`${methods} ${middleware.route.path}`);
    } else if (middleware.name === 'router') { // If it's a router middleware
      middleware.handle.stack.forEach((handler:any) => {
        if (handler.route) {
          const methods = Object.keys(handler.route.methods).map(method => method.toUpperCase()).join(', ');
          routes.push(`${methods} ${handler.route.path}`);
        }
      });
    }
  });
  console.log('Registered routes:', routes);
  return routes;
}
