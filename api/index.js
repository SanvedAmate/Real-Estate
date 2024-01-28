import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.router.js';

// Load environment variables from .env file
dotenv.config();

const password = process.env.MONGODB_PASSWORD;
const connectionString = `mongodb+srv://sanved:${encodeURIComponent(password)}@mern-real-estate.hmj1fhr.mongodb.net/MERN-Real-Estate?retryWrites=true&w=majority`;

mongoose.connect(connectionString)
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

  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });

  // Define a route for the root path
  app.get('/', (req, res) => {
    res.send('Welcome to the MERN Real Estate API!');
  });

  // Define your /test route handler
  app.use("/api/user", userRouter);
}
