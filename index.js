import express from "express";
import mongoose from "mongoose";

const app = express();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware (to parse JSON requests)
app.use(express.json());

// Default route
app.get("/", (req, res) => {
  res.send("🚀 Backend is running with MongoDB!");
});

// Example API route
app.get("/api/test", (req, res) => {
  res.json({ message: "Test API is working ✅" });
});

if (!MONGO_URI) {
  console.error("❌ MONGO_URI is missing!");
  process.exit(1);
}

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ MongoDB connected");
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
})
.catch((err) => {
  console.error("❌ MongoDB connection error:", err.message);
});
