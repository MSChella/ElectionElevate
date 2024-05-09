import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [adminData, setAdminData] = useState([]);

    useEffect(() => {
        fetchAdminData();
    }, []);

    const fetchAdminData = async () => {
        try {
            const response = await axios.get('/api/admin/dashboard');
            setAdminData(response.data);
        } catch (error) {
            console.error('Error fetching admin data:', error);
        }
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <ul>
                {adminData.map((admin, index) => (
                    <li key={index}>
                        <p>Username: {admin.username}</p>
                        <p>Email: {admin.email}</p>
                        {/* Add more fields as needed */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;
