import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const password = process.env.MONGODB_PASSWORD;
const connectionString = `mongodb+srv://sanved:${encodeURIComponent(password)}@mern-real-estate.hmj1fhr.mongodb.net/MERN-Real-Estate?retryWrites=true&w=majority`;

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});