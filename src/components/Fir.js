import React, { useState } from "react";
import { motion } from "framer-motion";
import "./FirPolice.css";

const Fir = () => {
  const [crimeType, setCrimeType] = useState(""); // Selected crime type
  const [formData, setFormData] = useState({
    victimName: "",
    suspectName: "",
    location: "",
    dateTime: "",
    description: "",
    additionalInfo: "",
    evidence: null,
  });
  const [submitted, setSubmitted] = useState(false);

  // Handles input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handles file upload
  const handleFileChange = (e) => {
    setFormData({ ...formData, evidence: e.target.files[0] });
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("FIR Filed:", { crimeType, ...formData });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // Show confirmation for 3 sec
    setFormData({
      victimName: "",
      suspectName: "",
      location: "",
      dateTime: "",
      description: "",
      additionalInfo: "",
      evidence: null,
    });
    setCrimeType("");
  };

  return (
    <div className="fir-container">
        <div className="boxx">
            <hr />
                <h2>Online FIR Filing System</h2>
            <hr />
        </div>
      <label>Select Crime Type:</label>
      <select value={crimeType} onChange={(e) => setCrimeType(e.target.value)} className="crime-select">
        <option value="">-- Select --</option>
        <option value="kidnapping">Kidnapping</option>
        <option value="murder">Murder</option>
        <option value="robbery">Robbery</option>
      </select>

      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: crimeType ? 1 : 0, height: crimeType ? "auto" : 0 }}
        transition={{ duration: 0.5 }}
        className="form-container"
      >
        {crimeType && (
          <form onSubmit={handleSubmit}>
            <label>Victim's Full Name:</label>
            <input type="text" name="victimName" value={formData.victimName} onChange={handleChange} required />

            <label>Suspect (if known):</label>
            <input type="text" name="suspectName" value={formData.suspectName} onChange={handleChange} />

            <label>Location of Incident:</label>
            <input type="text" name="location" value={formData.location} onChange={handleChange} required />

            <label>Date & Time:</label>
            <input type="datetime-local" name="dateTime" value={formData.dateTime} onChange={handleChange} required />
           
            {crimeType === "kidnapping" && (
              <>
                <label>Ransom Demand (if any):</label>
                <input type="text" name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} />
              </>
            )}

            {crimeType === "murder" && (
              <>
                <label>Weapon Used (if known):</label>
                <input type="text" name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} />
              </>
            )}

            {crimeType === "robbery" && (
              <>
                <label>Stolen Items Description:</label>
                <textarea name="additionalInfo" value={formData.additionalInfo} onChange={handleChange}></textarea>
              </>
            )}

            <label>Incident Description:</label>
            <textarea name="description" value={formData.description} onChange={handleChange} required></textarea>

            <label>Upload Evidence (if any):</label>
            <input type="file" accept="image/*,video/*,.pdf" onChange={handleFileChange} />

            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit" className="submit-btn">
              Submit FIR
            </motion.button>
          </form>
        )}
      </motion.div>

      {submitted && <motion.div className="success-message" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>FIR Filed Successfully!</motion.div>}
    </div>
  );
};

export default Fir;
