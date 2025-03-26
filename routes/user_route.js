const express = require("express");
const multer = require("multer");
const path = require("path");
const Complaint = require("../models/Complaint");

const router = express.Router();

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// POST route to submit a complaint
router.post("/submit-complaint", upload.single("file"), async (req, res) => {
  try {
    const { incidentName, address } = req.body;
    const file = req.file ? req.file.path : null;

    if (!incidentName || !address) {
      return res.status(400).json({ message: "Incident name and address are required." });
    }

    const newComplaint = new Complaint({
      incidentName,
      address,
      file,
      createdAt: new Date(),
    });

    await newComplaint.save();

    res.status(201).json({ message: "Complaint submitted successfully!", complaint: newComplaint });
  } catch (error) {
    console.error("Error submitting complaint:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
