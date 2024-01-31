import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

// Load environment variables from .env file
dotenv.config();

// Check if MONGODB_CONNECTION_STRING is defined
const mongoURI = process.env.MONGO;

if (!mongoURI) {
  console.error('MongoDB connection string is not defined in the environment variables.');
  process.exit(1);
}

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB: MERN-Real-Estate');
    startServer();
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  });

// Start Express server
function startServer() {
  const app = express();

  app.use(express.json());

  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });

  // Define a route for the root path
  app.get('/', (req, res) => {
    res.send('Welcome to the MERN Real Estate API!');
  });

  // Define your /test route handler
  app.use("/api/user", userRouter);
  app.use("/api/auth", authRouter);
}
