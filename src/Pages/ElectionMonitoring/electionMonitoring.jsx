import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ElectionMonitoringPage = () => {
    const [incidents, setIncidents] = useState([]);
    const [newIncident, setNewIncident] = useState({
        description: '',
        location: '',
        reportedBy: ''
    });

    useEffect(() => {
        const fetchIncidents = async () => {
            try {
                const response = await axios.get('/api/incidents');
                setIncidents(response.data);
            } catch (error) {
                console.error('Error fetching incidents', error);
            }
        };
        fetchIncidents();
    }, []);

    const handleChange = (e) => {
        setNewIncident({ ...newIncident, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/incidents', newIncident);
            setIncidents([...incidents, response.data]);
        } catch (error) {
            console.error('Error reporting incident', error);
        }
    };

    return (
        <div>
            <h2>Election Monitoring and Control</h2>
            <form onSubmit={handleSubmit}>
                {/* Form fields for incident details */}
                <textarea name="description" placeholder="Description" onChange={handleChange}></textarea>
                <input type="text" name="location" placeholder="Location" onChange={handleChange} />
                <input type="text" name="reportedBy" placeholder="Reported By" onChange={handleChange} />
                <button type="submit">Report Incident</button>
            </form>
            <ul>
                {incidents.map(incident => (
                    <li key={incident._id}>{incident.description} - {incident.location}</li>
                ))}
            </ul>
        </div>
    );
};

export default ElectionMonitoringPage;
