import React, { useState } from 'react';

import axios from '../config/axios-config';

const SignUpForm = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [sex, setSex] = useState('');
    const [age, setAge] = useState('');
    const [contactInfo, setContactInfo] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [permanentAddress, setPermanentAddress] = useState('');
    const [temporaryAddress, setTemporaryAddress] = useState('');
    const [state, setState] = useState('');
    const [fathersName, setFathersName] = useState('');
    const [mothersName, setMothersName] = useState('');
    const [spouseName, setspouseName] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make a POST request to your backend API endpoint
            const response = await axios.post('api/auth/signup', {
                username,
                password,
                fullName,
                sex,
                age,
                contactInfo,
                email,
                address,
                permanentAddress,
                temporaryAddress,
                state,
                fathersName,
                mothersName,
                spouseName,
                maritalStatus,
            });

            // Handle successful response from the backend
            console.log('User registration successful:', response.data);
            // Optionally, reset form fields after successful submission
            // setFullName('');
            // setSex('');
            // setAge('');
            // ...

            localStorage.setItem('token', response.data.token)
        } catch (error) {
            // Handle errors
            console.error('Error registering user:', error);
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <label>
                User Name:
                <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <label>
                Full Name:
                <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
            </label>
            <label>
                Sex:
                <select value={sex} onChange={(e) => setSex(e.target.value)}>
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                </select>
            </label>
            <label>
                Age:
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
            </label>
            <label>
                Contact Information:
                <input type="text" value={contactInfo} onChange={(e) => setContactInfo(e.target.value)} />
            </label>
            <label>
                Email Address:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
                Address:
                <textarea value={address} onChange={(e) => setAddress(e.target.value)} />
            </label>
            <label>
                Permanent Address:
                <textarea value={permanentAddress} onChange={(e) => setPermanentAddress(e.target.value)} />
            </label>
            <label>
                Temporary Address:
                <textarea value={temporaryAddress} onChange={(e) => setTemporaryAddress(e.target.value)} />
            </label>
            <label>
                State:
                <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
            </label>
            <label>
                Father's Name:
                <input type="text" value={fathersName} onChange={(e) => setFathersName(e.target.value)} />
            </label>
            <label>
                Mother's Name:
                <input type="text" value={mothersName} onChange={(e) => setMothersName(e.target.value)} />
            </label>
            <label>
                Spouse Name:
                <input type="text" value={spouseName} onChange={(e) => setspouseName(e.target.value)} />
            </label>
            <label>
                Marital Status:
                <select value={maritalStatus} onChange={(e) => setMaritalStatus(e.target.value)}>
                    <option value="">Select</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                </select>
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default SignUpForm;

