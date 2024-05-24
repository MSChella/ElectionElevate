import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VoterManagementPage = () => {
    const [voters, setVoters] = useState([]);
    const [newVoter, setNewVoter] = useState({
        name: '',
        age: '',
        gender: '',
        constituency: '',
        email: '',
        phone: '',
    });

    useEffect(() => {
        const fetchVoters = async () => {
            try {
                const response = await axios.get('/api/voters');
                setVoters(response.data);
            } catch (error) {
                console.error('Error fetching voters', error);
            }
        };
        fetchVoters();
    }, []);

    const handleChange = (e) => {
        setNewVoter({ ...newVoter, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/voters', newVoter);
            setVoters([...voters, response.data]);
        } catch (error) {
            console.error('Error adding voter', error);
        }
    };

    return (
        <div>
            <h2>Voter Management</h2>
            <form onSubmit={handleSubmit}>
                {/* Form fields for voter details */}
                <input type="text" name="name" placeholder="Name" onChange={handleChange} />
                <input type="number" name="age" placeholder="Age" onChange={handleChange} />
                <select name="gender" onChange={handleChange}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <input type="text" name="constituency" placeholder="Constituency" onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} />
                <input type="phone" name="phone" placeholder="Phone" onChange={handleChange} />
                <button type="submit">Add Voter</button>
            </form>
            <ul>
                {voters.map(voter => (
                    <li key={voter._id}>{voter.name} - {voter.constituency}</li>
                ))}
            </ul>
        </div>
    );
};

export default VoterManagementPage;
