import React, { useState } from 'react';
import "./Cases1.css";

const Cases1 = () => {
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
        { caseId: 'C009', name: 'Officer Suresh Nair', status: 'Solved', description: 'Drug smuggling case busted, multiple arrests made.', date: '2025-02-25' },
        { caseId: 'C010', name: 'Officer Kavita Rao', status: 'Pending', description: 'Fraud case, awaiting forensic report.', date: '2025-03-01' },
        { caseId: 'C011', name: 'Officer Anil Verma', status: 'Solved', description: 'Theft case, stolen goods recovered.', date: '2025-03-05' },
        { caseId: 'C012', name: 'Officer Meera Iyer', status: 'Unsolved', description: 'Murder investigation, no suspects yet.', date: '2025-03-10' },
        { caseId: 'C013', name: 'Officer Rohan Joshi', status: 'Pending', description: 'Bribery allegations under inquiry.', date: '2025-03-15' },
        { caseId: 'C014', name: 'Officer Sunita Shetty', status: 'Solved', description: 'Forgery case, suspect in custody.', date: '2025-03-20' },
        { caseId: 'C015', name: 'Officer Arjun Mishra', status: 'Unsolved', description: 'Extortion racket, investigation ongoing.', date: '2025-03-25' },
        { caseId: 'C016', name: 'Officer Sneha Kapoor', status: 'Pending', description: 'Domestic violence case, awaiting witness statements.', date: '2025-03-30' },
        { caseId: 'C017', name: 'Officer Deepak Tiwari', status: 'Solved', description: 'Fake currency racket busted.', date: '2025-04-02' },
        { caseId: 'C018', name: 'Officer Sanjay Gupta', status: 'Unsolved', description: 'Arson case, no arrests yet.', date: '2025-04-05' },
        { caseId: 'C019', name: 'Officer Neha Bansal', status: 'Pending', description: 'Child trafficking case, suspects identified.', date: '2025-04-10' },
        { caseId: 'C020', name: 'Officer Vishal Yadav', status: 'Solved', description: 'Illegal arms smuggling network dismantled.', date: '2025-04-15' },
        { caseId: 'C021', name: 'Officer Rekha Singh', status: 'Unsolved', description: 'Gold heist, mastermind unknown.', date: '2025-04-20' },
        { caseId: 'C022', name: 'Officer Manish Choudhary', status: 'Pending', description: 'Online scam, tracing perpetrators.', date: '2025-04-25' }
    ];
// created an array of object , each object is one police officer.
    const filteredCases = filter === "All" ? CurrentCases : CurrentCases.filter(caseItem => caseItem.status === filter);

    return (
        <div className="current-cases-container">
            <h2>Current and Solved Police Cases</h2>
            
            <label>Filter by Status: </label>
            <select value={filter} onChange={(e) => setFilter(e.target.value)} className="cases-dropdown">
                <option value="All">All</option>
                <option value="Pending">Pending</option>
                <option value="Solved">Solved</option>
                <option value="Unsolved">Unsolved</option>
            </select>

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

export default Cases1;