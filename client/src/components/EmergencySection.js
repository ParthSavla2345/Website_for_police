import React, { useState } from "react";
import "./EmergencySection.css";

const EmergencySection = () => {
  const [emergencyType, setEmergencyType] = useState("");
  const [details, setDetails] = useState("");
  const [level, setLevel] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`🚨 Emergency Reported!\nType: ${emergencyType}\nLevel: ${level}\nDetails: ${details}`);
    
    // Reset fields
    setEmergencyType("");
    setDetails("");
    setLevel("Medium");
  };

  return (
    <div className="emergency-container">
      <h2 className="h2emergency">🚨 Emergency Report</h2>
      <form onSubmit={handleSubmit}>
        <label>Type of Emergency:</label>
        <select value={emergencyType} onChange={(e) => setEmergencyType(e.target.value)} required>
          <option value="">Select an emergency...</option>
          <option value="Fire">🔥 Fire</option>
          <option value="Medical">🏥 Medical</option>
          <option value="Crime">🚔 Crime</option>
          <option value="Accident">🚑 Accident</option>
        </select>

        <label>Details:</label>
        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          placeholder="Describe the situation..."
          required
        />

        <label>Emergency Level:</label>
        <div className="radio-group">
          <label>
            <input type="radio" value="Low" checked={level === "Low"} onChange={() => setLevel("Low")} />
            Low
          </label>
          <label>
            <input type="radio" value="Medium" checked={level === "Medium"} onChange={() => setLevel("Medium")} />
            Medium
          </label>
          <label>
            <input type="radio" value="High" checked={level === "High"} onChange={() => setLevel("High")} />
            High
          </label>
        </div>

        <button type="submit" className="report-button">Report Emergency</button>
      </form>
    </div>
  );
};

export default EmergencySection;
