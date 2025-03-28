import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "./PoliceDashboard.css"

const locations = [
  {
    id: 1,
    title: 'Andheri Incident',
    description: 'A case is being investigated in Andheri.',
    location: [19.1202, 72.8351], // Andheri Lat, Long
  },
  {
    id: 2,
    title: 'Mumbai Robbery',
    description: 'A robbery case is under investigation in Mumbai.',
    location: [19.0760, 72.8777], // Mumbai Lat, Long
  },
  {
    id: 3,
    title: 'Missing Person in Navi Mumbai',
    description: 'A teenager has gone missing in Navi Mumbai.',
    location: [19.0330, 73.0298], // Navi Mumbai Lat, Long
  }
];

function PoliceDashboard() {
    const [alertList, setAlertList] = useState(locations);

  return (
   <div className="landing-page-container">
      <div className="map-container">
        <MapContainer center={[19.1202, 72.8351]} zoom={12} style={{ height: '500px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {alertList.map((alert) => (
            <Marker key={alert.id} position={alert.location}>
              <Popup>
                <strong>{alert.title}</strong><br />
                {alert.description}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div className="alert-section">
        <h2>Recent Alerts</h2>
        {alertList.length > 0 ? (
          <ul>
            {alertList.map((alert) => (
              <li key={alert.id} className="alert-item">
                <h3>{alert.title}</h3>
                <p>{alert.description}</p>
                <small>Location: {alert.location.join(', ')}</small>
              </li>
            ))}
          </ul>
        ) : (
          <p>No alerts at the moment.</p>
        )}
      </div>
    </div>
  )
}

export default PoliceDashboard;
