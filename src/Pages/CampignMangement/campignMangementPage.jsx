import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CampaignManagementPage = () => {
    const [campaigns, setCampaigns] = useState([]);
    const [newCampaign, setNewCampaign] = useState({
        name: '',
        events: [],
        volunteers: [],
        socialMedia: {
            facebook: '',
            twitter: '',
            instagram: ''
        }
    });

    useEffect(() => {
        const fetchCampaigns = async () => {
            try {
                const response = await axios.get('/api/campaigns');
                setCampaigns(response.data);
            } catch (error) {
                console.error('Error fetching campaigns', error);
            }
        };
        fetchCampaigns();
    }, []);

    const handleChange = (e) => {
        setNewCampaign({ ...newCampaign, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/campaigns', newCampaign);
            setCampaigns([...campaigns, response.data]);
        } catch (error) {
            console.error('Error adding campaign', error);
        }
    };

    return (
        <div>
            <h2>Campaign Management</h2>
            <form onSubmit={handleSubmit}>
                {/* Form fields for campaign details */}
                <input type="text" name="name" placeholder="Campaign Name" onChange={handleChange} />
                {/* Additional fields for events, volunteers, social media */}
                <button type="submit">Add Campaign</button>
            </form>
            <ul>
                {campaigns.map(campaign => (
                    <li key={campaign._id}>{campaign.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default CampaignManagementPage;
