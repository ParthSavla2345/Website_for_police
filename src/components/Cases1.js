import React from 'react'
import "./Cases1.css"

const CurrentCases = [
    {
      caseId: 'C001',
      name: 'Officer John Doe',
      status: 'Solved',
      description: 'Robbery case solved with the arrest of two suspects.',
      date: '2024-12-15',
    },
    {
      caseId: 'C002',
      name: 'Officer Jane Smith',
      status: 'Pending',
      description: 'Car theft under investigation.',
      date: '2025-01-05',
    },
    {
      caseId: 'C003',
      name: 'Officer Sarah Lee',
      status: 'Unsolved',
      description: 'Missing person case, no leads so far.',
      date: '2025-01-20',
    },
    {
      caseId: 'C004',
      name: 'Officer Mike Davis',
      status: 'Solved',
      description: 'Burglary case solved after retrieving stolen goods.',
      date: '2025-01-18',
    },
    {
      caseId: 'C005',
      name: 'Officer Emily Clark',
      status: 'Pending',
      description: 'Assault case, awaiting medical reports.',
      date: '2025-02-01',
    },
    {
      caseId: 'C006',
      name: 'Officer Jack Taylor',
      status: 'Unsolved',
      description: 'Vandalism in the park, suspects unknown.',
      date: '2025-01-22',
    },
    {
      caseId: 'C007',
      name: 'Officer Olivia White',
      status: 'Solved',
      description: 'Fraud case, suspect arrested and money recovered.',
      date: '2025-01-10',
    },
    {
      caseId: 'C008',
      name: 'Officer James Black',
      status: 'Pending',
      description: 'Drug trafficking investigation ongoing.',
      date: '2025-02-05',
    },
    {
      caseId: 'C009',
      name: 'Officer Natalie Brown',
      status: 'Unsolved',
      description: 'Stabbing incident, victim in critical condition.',
      date: '2025-01-30',
    },
    {
      caseId: 'C010',
      name: 'Officer Ethan Green',
      status: 'Solved',
      description: 'Domestic violence case, suspect arrested.',
      date: '2025-01-14',
    },
    {
      caseId: 'C011',
      name: 'Officer Lucas Gray',
      status: 'Pending',
      description: 'Traffic accident investigation, awaiting witnesses.',
      date: '2025-01-28',
    },
    {
      caseId: 'C012',
      name: 'Officer Sophia Evans',
      status: 'Unsolved',
      description: 'Arson case, fire department still investigating.',
      date: '2025-02-03',
    },
    {
      caseId: 'C013',
      name: 'Officer William Scott',
      status: 'Solved',
      description: 'Theft at a store, suspect caught on camera.',
      date: '2025-01-20',
    },
    {
      caseId: 'C014',
      name: 'Officer Isabella White',
      status: 'Pending',
      description: 'Hacking case, working with IT specialists.',
      date: '2025-01-25',
    },
    {
      caseId: 'C015',
      name: 'Officer Aiden Blue',
      status: 'Unsolved',
      description: 'Kidnapping case, awaiting further evidence.',
      date: '2025-01-15',
    },
    {
      caseId: 'C016',
      name: 'Officer Mia Harris',
      status: 'Solved',
      description: 'Sexual assault case, suspect arrested after victim came forward.',
      date: '2025-01-12',
    },
    {
      caseId: 'C017',
      name: 'Officer Gabriel Lee',
      status: 'Pending',
      description: 'Corruption case, ongoing investigation.',
      date: '2025-02-07',
    },
    {
      caseId: 'C018',
      name: 'Officer Olivia Miller',
      status: 'Unsolved',
      description: 'Robbery at a jewelry store, no suspects found.',
      date: '2025-01-18',
    },
    {
      caseId: 'C019',
      name: 'Officer Noah Jackson',
      status: 'Solved',
      description: 'Breaking and entering case solved, suspect arrested.',
      date: '2025-01-11',
    },
    {
      caseId: 'C020',
      name: 'Officer Chloe Harris',
      status: 'Pending',
      description: 'Identity theft case, monitoring bank records.',
      date: '2025-01-29',
    },
  ];
  
  //created an array of object where each object is one case 

function Cases1() {

  return (
    <div className="current-cases-container">
    <h2>Case Book</h2>
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
        {CurrentCases.map((caseItem) => (
          <tr key={caseItem.caseId}>
            <td>{caseItem.caseId}</td>
            <td>{caseItem.name}</td>
            <td>
              <span
                className={
                  caseItem.status === 'Solved'
                    ? 'status-solved'
                    : caseItem.status === 'Pending'
                    ? 'status-pending'
                    : 'status-unsolved'
                }
              >
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
  )
}

export default Cases1
