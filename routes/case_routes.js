import express from 'express';
import Case from '../models/Cases.js';

const router = express.Router();

// POST route to add a new case (FIR submission)
router.post('/add', async (req, res) => {
  try {
    const {
      crimeType,
      victimName,
      suspectName,
      location,
      dateTime,
      description,
      additionalInfo,
      evidence,
      officer,
      status,
    } = req.body;

    // Validate the incoming request body to ensure all required fields are present
    if (!crimeType || !victimName || !location || !dateTime || !description || !officer) {
      return res.status(400).json({ message: 'Required fields are missing.' });
    }

    // Create a new case object with the given data
    const newCase = new Case({
      crimeType,
      victimName,
      suspectName,
      location,
      dateTime: new Date(dateTime), // Ensure date is correctly parsed
      description,
      additionalInfo,
      evidence: evidence || null, // Default to null if no evidence provided
      officer,
      status: status || 'Pending', // Default status to 'Pending' if not provided
    });

    // Save the case to the database
    await newCase.save();

    res.status(201).json({ message: 'Case added successfully!', case: newCase });
  } catch (error) {
    console.error('Error adding case:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// GET route to fetch all cases
router.get('/', async (req, res) => {
  try {
    const cases = await Case.find(); // Fetch all cases
    res.status(200).json(cases);
  } catch (error) {
    console.error('Error fetching cases:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// GET route to fetch cases based on their status (filter by Pending, Solved, Unsolved)
router.get('/status/:status', async (req, res) => {
  try {
    const { status } = req.params;
    const cases = await Case.find({ status }); // Fetch cases with the given status
    res.status(200).json(cases);
  } catch (error) {
    console.error('Error fetching cases by status:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

export default router;
