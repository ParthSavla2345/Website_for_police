import React from "react";
import { AlertCircle, XCircle } from "lucide-react";

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
  warning: { background: "#fdf6e3", color: "#856404", borderLeft: "6px solid #f4c542", padding: "15px", borderRadius: "8px", display: "flex", alignItems: "center", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", transition: "all 0.3s ease-in-out" },
  alert: { background: "#fae3e3", color: "#721c24", borderLeft: "6px solid #e57373", padding: "15px", borderRadius: "8px", display: "flex", alignItems: "center", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", transition: "all 0.3s ease-in-out" },
};

const alertIcons = {
  warning: <AlertCircle style={{ color: "#856404" }} size={24} />, 
  alert: <XCircle style={{ color: "#721c24" }} size={24} />, 
};

const UserAlerts = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "20px auto", display: "flex", flexDirection: "column", gap: "10px" }}>
      {alerts.map((alert) => (
        <div
          key={alert.id}
          style={{ ...alertStyles[alert.type], cursor: "pointer", transform: "scale(1)", transition: "transform 0.3s" }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
          <div style={{ marginRight: "15px" }}>{alertIcons[alert.type]}</div>
          <span style={{ fontSize: "16px" }}>{alert.message}</span>
        </div>
      ))}
    </div>
  );
};

export default UserAlerts;
