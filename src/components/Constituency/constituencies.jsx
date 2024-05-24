import React, { useState } from 'react';

const constituencyData = {
    TamilNadu: [
        { id: 1, constituency: 'Gummidipoondi', reserved: '-', district: 'Thiruvallur', lokSabha: 'Tiruvallur', since: 1967 },
        { id: 2, constituency: 'Ponneri', reserved: 'SC', district: 'Thiruvallur', lokSabha: 'Tiruvallur', since: 1952 },
        { id: 3, constituency: 'Tiruttani', reserved: '-', district: 'Arakkonam', lokSabha: 'Arakkonam', since: 1952 },
        // Add more constituencies here...
    ],
    // Add other states here...
};

const Constituency = () => {
    const [selectedState, setSelectedState] = useState('');
    const [constituencies, setConstituencies] = useState([]);

    const handleStateChange = (e) => {
        const state = e.target.value;
        setSelectedState(state);
        setConstituencies(constituencyData[state] || []);
    };

    return (
        <div className="constituency-page">
            <h2>Select State</h2>
            <select value={selectedState} onChange={handleStateChange}>
                <option value="">Select a state</option>
                <option value="TamilNadu">Tamil Nadu</option>
                {/* Add more options for other states here */}
            </select>

            {selectedState && (
                <div>
                    <h3>Constituencies in {selectedState}</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Constituency</th>
                                <th>Reserved</th>
                                <th>District</th>
                                <th>Lok Sabha Constituency</th>
                                <th>Since</th>
                            </tr>
                        </thead>
                        <tbody>
                            {constituencies.map((constituency, index) => (
                                <tr key={constituency.id}>
                                    <td>{index + 1}</td>
                                    <td>{constituency.constituency}</td>
                                    <td>{constituency.reserved}</td>
                                    <td>{constituency.district}</td>
                                    <td>{constituency.lokSabha}</td>
                                    <td>{constituency.since}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Constituency;

