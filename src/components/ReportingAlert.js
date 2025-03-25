import React, { useState } from "react";
import "./ReportingAlert.css";

const ReportingAlert = ({ onClose }) => {
  const [formData, setFormData] = useState({
    incidentName: "",
    address: "",
    file: null,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError(""); // Clear error on change
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.incidentName || !formData.address) {
      setError("Incident name and address are required.");
      return;
    }

    console.log("Reported Incident:", formData);
    alert("Incident reported successfully!");

    setFormData({ incidentName: "", address: "", file: null });
    onClose(); // Close modal
  };

  return (
    <div className="reporting-alert">
    <div className="divv">    
    <hr />
    <h2>Report an Incident</h2>
    <hr />
    </div>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Incident Name:</label>
        <input
          type="text"
          name="incidentName"
          value={formData.incidentName}
          onChange={handleChange}
          required
        />

        <label>Address of Incident:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <label>Upload File (Optional):</label>
        <input type="file" accept="image/*,video/*,.pdf" onChange={handleFileChange} />

        <button type="submit" className="submit-btn">Submit Report</button>
      </form>
    </div>
  );
};

export default ReportingAlert;
