// MemberManagement.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MemberManagement = () => {
    const [members, setMembers] = useState([]);
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: '',
        role: '',
        constituencyId: '',
        education: '',
        politicalCareer: '',
        professionalCareer: ''
    });

    useEffect(() => {
        fetchMembers();
    }, []);

    const fetchMembers = async () => {
        const response = await axios.get('/api/members');
        setMembers(response.data);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('/api/members', formState);
        fetchMembers();
    };

    return (
        <div className="member-management">
            <h2>Member Management</h2>
            <form onSubmit={handleSubmit}>
                {/* Form inputs for each attribute */}
                <input type="text" name="name" value={formState.name} onChange={handleInputChange} placeholder="Name" />
                <input type="email" name="email" value={formState.email} onChange={handleInputChange} placeholder="Email" />
                <input type="password" name="password" value={formState.password} onChange={handleInputChange} placeholder="Password" />
                <input type="text" name="role" value={formState.role} onChange={handleInputChange} placeholder="Role" />
                <input type="text" name="constituencyId" value={formState.constituencyId} onChange={handleInputChange} placeholder="Constituency ID" />
                <input type="text" name="education" value={formState.education} onChange={handleInputChange} placeholder="Education" />
                <textarea name="politicalCareer" value={formState.politicalCareer} onChange={handleInputChange} placeholder="Political Career"></textarea>
                <textarea name="professionalCareer" value={formState.professionalCareer} onChange={handleInputChange} placeholder="Professional Career"></textarea>
                <button type="submit">Add Member</button>
            </form>
            <h3>Existing Members</h3>
            <ul>
                {members.map((member) => (
                    <li key={member.id}>{member.name} ({member.role})</li>
                ))}
            </ul>
        </div>
    );
};

export default MemberManagement;
