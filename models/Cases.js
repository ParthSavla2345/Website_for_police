import mongoose from 'mongoose';

// Define the schema for the Case model
const caseSchema = new mongoose.Schema(
  {
    crimeType: { type: String, required: true }, // Type of crime
    victimName: { type: String, required: true }, // Name of the victim
    suspectName: { type: String }, // Name of the suspect (if known)
    location: { type: String, required: true }, // Location of the crime
    dateTime: { type: Date, required: true }, // Date and time of the incident
    description: { type: String, required: true }, // Detailed description of the incident
    additionalInfo: { type: String }, // Additional info specific to the crime type (e.g., ransom demand, stolen items, weapon used)
    evidence: { type: String, default: null }, // Link to uploaded evidence (file path)
    officer: { type: String, required: true }, // Officer handling the case
    status: { type: String, default: 'Pending' }, // Status of the case (e.g., Pending, Solved, Unsolved)
  },
  { timestamps: true }
);

// Create the Case model using the schema
const Case = mongoose.model('Case', caseSchema);

export default Case;
