import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import authRoutes from "./routes/auth.js";
import caseRoutes from "./routes/case_routes.js";
import path from "path";

dotenv.config();

// Check if required environment variables are set
if (!process.env.MONGO_URI || !process.env.JWT_SECRET) {
  console.error("Error: MONGO_URI or JWT_SECRET is not set in .env file");
  process.exit(1);
}

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));
app.use(morgan("dev"));

// Serve static files (for uploaded evidence files)
app.use("/uploads", express.static(path.join(path.resolve(), "uploads")));

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/cases", caseRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("🚀 Police Portal API is Running!");
});

// Start Server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
