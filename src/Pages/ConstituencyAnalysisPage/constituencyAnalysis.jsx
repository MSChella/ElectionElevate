import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ConstituencyAnalysisPage = () => {
    const [constituencies, setConstituencies] = useState([]);
    const [newConstituency, setNewConstituency] = useState({
        name: '',
        ageGroups: {},
        genderDistribution: {},
        politicalTrends: [],
        keyIssues: [],
    });

    useEffect(() => {
        const fetchConstituencies = async () => {
            try {
                const response = await axios.get('/api/constituencies');
                setConstituencies(response.data);
            } catch (error) {
                console.error('Error fetching constituencies', error);
            }
        };
        fetchConstituencies();
    }, []);

    const handleChange = (e) => {
        setNewConstituency({ ...newConstituency, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/constituencies', newConstituency);
            setConstituencies([...constituencies, response.data]);
        } catch (error) {
            console.error('Error adding constituency', error);
        }
    };

    return (
        <div>
            <h2>Constituency Analysis</h2>
            <form onSubmit={handleSubmit}>
                {/* Form fields for constituency details */}
                <input type="text" name="name" placeholder="Name" onChange={handleChange} />
                {/* Additional fields for demographics, political trends, key issues */}
                <button type="submit">Add Constituency</button>
            </form>
            <ul>
                {constituencies.map(constituency => (
                    <li key={constituency._id}>{constituency.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ConstituencyAnalysisPage;
