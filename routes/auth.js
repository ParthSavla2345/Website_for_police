import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    // Check if the role is valid (0 for user or 1 for police)
    if (![0, 1].includes(role)) {
      return res.status(400).json({ error: "Invalid role" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword, role });

    // Save the user to the database
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ error: "Invalid username or password" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid username or password" });
    }
    const token = jwt.sign(
      { id: user._id, username: user.username, role: user.role }, // Include role in the token payload
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({
      message: "Login successful",
      token,
      user: { id: user._id, username: user.username, email: user.email, role: user.role }, // Include role in the response
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Logout (clear JWT on client side)
router.post("/logout", (req, res) => {
  // Since JWT is stored on the client side, we can handle "logout" by instructing the client to delete the JWT.
  res.json({ message: "Logged out successfully" });
});


export default router;
