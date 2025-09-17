import dotenv from 'dotenv';
dotenv.config(); // Load from .env before anything else

import express from 'express';
import connectDB from './utils/connectDB.js';

const app = express();

connectDB();

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
