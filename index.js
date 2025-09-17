// index.js or app.js

import express from 'express';
import connectDB from './utils/connectDB.js'; // Note the .js extension
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config();  // Load environment variables

const app = express();
app.use(cors())

// Connect to MongoDB
connectDB();

// Your other middleware, routes, and logic
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Listen to the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
