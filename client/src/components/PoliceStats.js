import React, { useState } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import "./PoliceStats.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

function PoliceStats() {
  const [hoveredChart, setHoveredChart] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    caseId: '',
    caseSolved: false,  
    description: '',
  });

  const pieData = {
    labels: ['Solved', 'Pending', 'Unsolved'],
    datasets: [{
      data: [60, 25, 15],
      backgroundColor: ['#007BFF', '#28A745', '#FFC107'],
    }],
  };

  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [{
      label: 'Police Cases',
      data: [20, 35, 50, 40, 55],
      backgroundColor: '#007bff',
      borderColor: '#0056b3',
      borderWidth: 1,
    }],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Cases Over Time',
        font: {
          size: 18,
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.dataset.label}: ${tooltipItem.raw}`,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Cases',
        },
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      caseId: '',
      caseSolved: false,
      description: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <div className="police-stats-container">
      <h1>Police Statistics</h1>
      
      <div className="chart-container-wrapper">
        <div 
          className={`chart-container ${hoveredChart === 'pie' ? 'zoom-in' : hoveredChart === 'bar' ? 'zoom-out' : ''}`}
          onMouseEnter={() => setHoveredChart('pie')}
          onMouseLeave={() => setHoveredChart(null)}
        >
          <div className="h3label1">
            <hr />
              <h3>Case Status</h3>
            <hr />
          </div>
          <Pie data={pieData} />
          <p className="chart-explanation">
            This pie chart shows the real-time distribution of police cases. <br />
            Current data indicates that 60% of cases have been solved, 25% are pending, and 15% remain unsolved.
          </p>
        </div>

        <div 
          className={`chart-container ${hoveredChart === 'bar' ? 'zoom-in' : hoveredChart === 'pie' ? 'zoom-out' : ''}`}
          onMouseEnter={() => setHoveredChart('bar')}
          onMouseLeave={() => setHoveredChart(null)}
        >
          <div className="h3label1">
            <hr />
              <h3>Cases Over Time</h3>
            <hr />
          </div>
          <Bar data={barData} options={barOptions} />
          <p className="chart-explanation">
            This bar chart displays the number of police cases reported over the past five months. <br />
            The data shows a fluctuating trend, with the highest number of cases reported in May (55 cases).
          </p>
        </div>
      </div>
      <div className="police-form-container">
        <div className="h3label1">
            <hr />
              <h3>Case Information Entry</h3>
            <hr />
        </div>
       
        <form onSubmit={handleSubmit} className="police-form">
          <div className="form-field">
            <label >Officer Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-field">
            <label >Case ID:</label>
            <input
              type="text"
              id="caseId"
              name="caseId"
              value={formData.caseId}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-field">
            <label className="checkbox-label">
              Case Solved
            </label>
            <input
                type="checkbox"
                id="caseSolved"
                name="caseSolved"
                checked={formData.caseSolved}
                onChange={handleInputChange}
                style={{ marginLeft: "6px" }} 
              />
          </div>
          <div className="form-field">
            <label >Case Description:</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}


export default PoliceStats;
