import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar, Pie } from 'react-chartjs-2';

const AnalyticsPage = () => {
    const [voterAnalytics, setVoterAnalytics] = useState({});
    const [constituencyAnalytics, setConstituencyAnalytics] = useState([]);

    useEffect(() => {
        const fetchAnalytics = async () => {
            try {
                const voterResponse = await axios.get('/api/analytics/voter-analytics');
                setVoterAnalytics(voterResponse.data);
                const constituencyResponse = await axios.get('/api/analytics/constituency-analytics');
                setConstituencyAnalytics(constituencyResponse.data);
            } catch (error) {
                console.error('Error fetching analytics', error);
            }
        };
        fetchAnalytics();
    }, []);

    const ageData = {
        labels: voterAnalytics.ageDistribution?.map(item => item._id) || [],
        datasets: [{
            label: 'Age Distribution',
            data: voterAnalytics.ageDistribution?.map(item => item.count) || [],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
        }]
    };

    return (
        <div>
            <h2>Data Analytics and Visualization</h2>
            <div>
                <h3>Voter Analytics</h3>
                <p>Total Voters: {voterAnalytics.totalVoters}</p>
                <Bar data={ageData} />
            </div>
            <div>
                <h3>Constituency Analytics</h3>
                {constituencyAnalytics.map(constituency => (
                    <div key={constituency._id}>
                        <h4>{constituency.name}</h4>
                        <p>Demographics: {JSON.stringify(constituency.demographics)}</p>
                        <p>Political Trends: {constituency.politicalTrends.join(', ')}</p>
                        <p>Key Issues: {constituency.keyIssues.join(', ')}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnalyticsPage;
