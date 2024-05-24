import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CandidateTrackingPage = () => {
    const [candidates, setCandidates] = useState([]);
    const [newCandidate, setNewCandidate] = useState({
        name: '',
        party: '',
        profile: '',
        campaignStrategies: [],
        performanceMetrics: {},
    });

    useEffect(() => {
        const fetchCandidates = async () => {
            try {
                const response = await axios.get('/api/candidates');
                setCandidates(response.data);
            } catch (error) {
                console.error('Error fetching candidates', error);
            }
        };
        fetchCandidates();
    }, []);

    const handleChange = (e) => {
        setNewCandidate({ ...newCandidate, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/candidates', newCandidate);
            setCandidates([...candidates, response.data]);
        } catch (error) {
            console.error('Error adding candidate', error);
        }
    };

    return (
        <div>
            <h2>Candidate Tracking and Analysis</h2>
            <form onSubmit={handleSubmit}>
                {/* Form fields for candidate details */}
                <input type="text" name="name" placeholder="Name" onChange={handleChange} />
                <input type="text" name="party" placeholder="Party" onChange={handleChange} />
                <textarea name="profile" placeholder="Profile" onChange={handleChange}></textarea>
                {/* Additional fields for campaign strategies, performance metrics */}
                <button type="submit">Add Candidate</button>
            </form>
            <ul>
                {candidates.map(candidate => (
                    <li key={candidate._id}>{candidate.name} - {candidate.party}</li>
                ))}
            </ul>
        </div>
    );
};

export default CandidateTrackingPage;
