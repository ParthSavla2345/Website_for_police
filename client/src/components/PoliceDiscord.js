import React, { useState } from "react";
import "./PoliceDiscord.css";

const PoliceDiscord = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "Chief Officer", text: "All units, report status!", image: null },
    { id: 2, sender: "Unit 12", text: "Patrolling Sector 5.", image: "https://theindianlaw.in/wp-content/uploads/2020/10/Handcuff.jpg" },
  ]);
  const [input, setInput] = useState("");
  const [file, setFile] = useState(null);
  const [showActive, setShowActive] = useState(true); // Toggle active/all members

  const sendMessage = () => {
    if (input.trim() !== "" || file) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: prevMessages.length + 1, sender: "You", text: input, image: file }
      ]);
      setInput("");
      setFile(null);
    }
  };

  // Dummy data for police officers
  const allOfficers = [
    { id: 1, name: "Chief Officer", active: true },
    { id: 2, name: "Officer Prashyant", active: true },
    { id: 3, name: "DSP Rathod", active: false },
    { id: 4, name: "Cyber Squad", active: false },
    { id: 5, name: "Detective Blake", active: true },
    { id: 6, name: "Sergeant Gupta", active: false },
    { id: 7, name: "Patrol Officer Vikram", active: true },
  ];

  // Filter active members
  const activeOfficers = allOfficers.filter((officer) => officer.active);

  return (
    <div className="discord-container">
      <div className="sidebar-left">
        <div className="community-box">
            <h2>Police Communities</h2>
            <ul className="ul1">
                <li><p>Crime Investigations</p></li>
                <li><p>Cybersecurity</p></li>
                <li><p>Traffic Control</p></li>
                <li><p>Emergency Response</p></li>
            </ul>
        </div>
        <div className="police-channel">        
            <h2>Police Channels</h2>
            <ul className="ul2">
                <li>General</li>
                <li>Emergency Reports</li>
                <li>Patrolling Updates</li>
                <li>Crime Alerts</li>
            </ul>
        </div>
      </div>

      <div className="chat-window">
        <div className="chat-messages">
          {messages.map((msg) => (
            <div key={msg.id} className="message">
              <strong>{msg.sender}: </strong> {msg.text}
              {msg.image && (
                <img
                  src={typeof msg.image === "string" ? msg.image : URL.createObjectURL(msg.image)}
                  alt="Uploaded"
                  className="message-image"
                />
              )}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            placeholder="Send a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input
            type="file"
            id="file-upload"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button onClick={() => document.getElementById("file-upload").click()} className="file-input">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pin" viewBox="0 0 16 16">
          <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A6 6 0 0 1 5 6.708V2.277a3 3 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354m1.58 1.408-.002-.001zm-.002-.001.002.001A.5.5 0 0 1 6 2v5a.5.5 0 0 1-.276.447h-.002l-.012.007-.054.03a5 5 0 0 0-.827.58c-.318.278-.585.596-.725.936h7.792c-.14-.34-.407-.658-.725-.936a5 5 0 0 0-.881-.61l-.012-.006h-.002A.5.5 0 0 1 10 7V2a.5.5 0 0 1 .295-.458 1.8 1.8 0 0 0 .351-.271c.08-.08.155-.17.214-.271H5.14q.091.15.214.271a1.8 1.8 0 0 0 .37.282"/>
          </svg>
          </button>
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>

      {/* Right Sidebar with Active and All Officers */}
      <div className="sidebar-right">
        <div className="OnlineOffline"> 
          <h2>Officers</h2>
          <div className="button-container">
            <button className={`button left ${showActive ? "active" : ""}`} onClick={() => setShowActive(true)}>
              Active Currently
            </button>
            <button className={`button right ${!showActive ? "active" : ""}`} onClick={() => setShowActive(false)}>
              ALL
            </button>
        </div>
        <div className="ulOnlineOffline">       
           <ul>
          {(showActive ? activeOfficers : allOfficers).map((officer) => (
            <li key={officer.id} className="listOfActiveInactive">{officer.name} </li>
          ))}
        </ul>
        </div>
        </div>
      </div>
    </div>
  );
};

export default PoliceDiscord;