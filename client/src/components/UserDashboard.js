import React, { useState } from "react";
import { AlertCircle, XCircle, Mic } from "lucide-react";
import "./Dashboard.css";

const Dashboard = () => {
  const [showAllAlerts, setShowAllAlerts] = useState(false);
  const [formData, setFormData] = useState({
    incidentName: "",
    address: "",
    file: null,
  });
  const [error, setError] = useState("");
  const [listeningField, setListeningField] = useState(null);

  const alerts = [
    { id: 1, type: "warning", message: "A tiger has been spotted near Jim Corbett National Park. Authorities are working to contain the situation. Please stay indoors and avoid unnecessary travel." },
    { id: 2, type: "alert", message: "A terrorist attack has been reported in Mumbai's Colaba area. Several individuals have been taken hostage. Security forces are responding. Stay away from the affected zone and remain vigilant." },
    { id: 3, type: "warning", message: "Heavy flooding is expected in Chennai due to continuous rainfall. Residents in low-lying areas should move to higher ground immediately and follow emergency protocols." },
    { id: 4, type: "alert", message: "A severe storm with high winds and lightning is approaching Kolkata. Take shelter in a secure location, avoid open areas, and stock up on essentials." },
    { id: 5, type: "warning", message: "Reports of unidentified armed individuals moving through the vicinity of Hyderabad's Charminar area. Law enforcement is investigating. Stay indoors and report any suspicious activity." },
    { id: 6, type: "alert", message: "A major gas leak has been reported in the downtown district of Bangalore. Emergency crews are on-site. Evacuate the area immediately to avoid health risks." },
    { id: 7, type: "warning", message: "Earthquake tremors have been detected in Delhi. Seek cover under sturdy furniture and stay away from windows until further notice." },
    { id: 8, type: "alert", message: "A serious accident involving multiple vehicles has occurred on Mumbai-Pune Expressway, causing heavy congestion. Avoid the route and use alternative roads." },
  ];

  const alertStyles = {
    warning: { background: "#fdf6e3", color: "#856404", borderLeft: "6px solid #f4c542" },
    alert: { background: "#fae3e3", color: "#721c24", borderLeft: "6px solid #e57373" },
  };

  const alertIcons = {
    warning: <AlertCircle style={{ color: "#856404" }} size={24} />,
    alert: <XCircle style={{ color: "#721c24" }} size={24} />,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError("");
  };

  const handleSpeechRecognition = (field) => {
    if (!window.SpeechRecognition && !window.webkitSpeechRecognition) {
      alert("Your browser does not support speech recognition.");
      return;
    }
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 3;
    recognition.onstart = () => setListeningField(field);
    recognition.onend = () => setListeningField(null);
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setFormData((prev) => ({ ...prev, [field]: transcript }));
    };
    recognition.start();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.incidentName || !formData.address) {
      setError("Incident name and address are required.");
      return;
    }
    alert("Incident reported successfully!");
    setFormData({ incidentName: "", address: "", file: null });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  return (
    <div className="dashboard">
      <div className="left-section">
        <div className="Label4">
          <hr />
          <h3>Latest Alerts</h3>
          <hr />
        </div>
        {alerts.slice(0, showAllAlerts ? alerts.length : 3).map((alert) => (
          <div key={alert.id} style={{ ...alertStyles[alert.type], padding: "15px", margin: "10px 0" }} className="alert-box">
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              {alertIcons[alert.type]}
              <span>{alert.message}</span>
            </div>
          </div>
        ))}

        {alerts.length > 3 && (
          <button className="toggle-btn" onClick={() => setShowAllAlerts(!showAllAlerts)}>
            {showAllAlerts ? "Show Less" : "Show More"}
          </button>
        )}
      </div>

      <div className="right-section">
        <div className="Label4">
          <hr />
          <h3>File An FIR</h3>
          <hr />
        </div>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <label>Incident Name:</label>
          <div style={{ position: "relative", width: "93%" }}>
            <input 
              type="text" 
              name="incidentName" 
              value={formData.incidentName} 
              onChange={handleChange} 
              required 
              style={{ width: "100%", paddingRight: "30px" }} 
            />
            <Mic 
              size={20} 
              onClick={() => handleSpeechRecognition("incidentName")} 
              style={{ 
                position: "absolute", 
                right: "15px", 
                top: "50%", 
                transform: "translateY(-50%)", 
                cursor: "pointer", 
                color: listeningField === "incidentName" ? "red" : "black" 
              }} 
            />
          </div>

          <label>Address of Incident:</label>
          <div style={{ position: "relative", width: "93%" }}>
            <input 
              type="text" 
              name="address" 
              value={formData.address} 
              onChange={handleChange} 
              required 
              style={{ width: "100%", paddingRight: "30px" }} 
            />
            <Mic 
              size={20} 
              onClick={() => handleSpeechRecognition("address")} 
              style={{ 
                position: "absolute", 
                right: "15px", 
                top: "50%", 
                transform: "translateY(-50%)", 
                cursor: "pointer", 
                color: listeningField === "address" ? "red" : "black" 
              }} 
            />
          </div>

          <label>Upload File (Optional):</label>
          <input type="file" accept="image/*,video/*,.pdf" onChange={handleFileChange} />

          <button type="submit" className="submit-btn"> Submit FIR</button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
