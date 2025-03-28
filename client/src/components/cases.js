import React, { useState } from 'react';
import "./cases.css";

const Cases = () => {
    const [filter, setFilter] = useState("All");

    const CurrentCases = [
        { caseId: 'C001', name: 'Officer John Doe', status: 'Solved', description: 'Robbery case solved with the arrest of two suspects.', date: '2024-12-15' },
        { caseId: 'C002', name: 'Officer Jane Smith', status: 'Pending', description: 'Car theft under investigation.', date: '2025-01-05' },
        { caseId: 'C003', name: 'Officer Sarah Lee', status: 'Unsolved', description: 'Missing person case, no leads so far.', date: '2025-01-20' },
        { caseId: 'C004', name: 'Officer Mike Davis', status: 'Solved', description: 'Burglary case solved after retrieving stolen goods.', date: '2025-01-18' },
        { caseId: 'C005', name: 'Officer Emily Clark', status: 'Pending', description: 'Assault case, awaiting medical reports.', date: '2025-02-01' },
        { caseId: 'C006', name: 'Officer Rajesh Sharma', status: 'Solved', description: 'Cyber fraud case cracked, suspect arrested.', date: '2025-02-10' },
        { caseId: 'C007', name: 'Officer Priya Deshmukh', status: 'Pending', description: 'Kidnapping case, ongoing investigation.', date: '2025-02-15' },
        { caseId: 'C008', name: 'Officer Amit Patil', status: 'Unsolved', description: 'Hit and run case, no suspects identified.', date: '2025-02-20' },
    ];

    const filteredCases = filter === "All" ? CurrentCases : CurrentCases.filter(caseItem => caseItem.status === filter);

    return (
        <div className="current-cases-container">
            <h2>Current and Solved Police Cases</h2>
            
            {/* Dropdown to filter cases */}
            <label>Filter by Status: </label>
            <select value={filter} onChange={(e) => setFilter(e.target.value)} className="cases-dropdown">
                <option value="All">All</option>
                <option value="Pending">Pending</option>
                <option value="Solved">Solved</option>
                <option value="Unsolved">Unsolved</option>
            </select>

            {/* Cases Table */}
            <table className="cases-table">
                <thead>
                    <tr>
                        <th>Case ID</th>
                        <th>Officer</th>
                        <th>Status</th>
                        <th>Description</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCases.map((caseItem) => (
                        <tr key={caseItem.caseId}>
                            <td>{caseItem.caseId}</td>
                            <td>{caseItem.name}</td>
                            <td>
                                <span className={
                                    caseItem.status === 'Solved' ? 'status-solved' :
                                    caseItem.status === 'Pending' ? 'status-pending' : 'status-unsolved'
                                }>
                                    {caseItem.status}
                                </span>
                            </td>
                            <td>{caseItem.description}</td>
                            <td>{caseItem.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Cases;
