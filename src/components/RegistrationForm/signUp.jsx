import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchConstituency } from '../../apiServices/constituencyAPI';
import axios from '../../config/axios-config';
import '../RegistrationForm/style.css'
import { fetchDistrict } from '../../apiServices/districtAPI';

const SignUpForm = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [role, setRole] = useState('');
    const [selectedConstituency, setSelectedConstituency] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [constituencies, setConstituencies] = useState([]);
    const [districts, setDistricts] = useState([]);
    // const [talukId, setTalukId] = useState('');
    const [sex, setSex] = useState('');
    const [age, setAge] = useState('');
    const [contactInfo, setContactInfo] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [permanentAddress, setPermanentAddress] = useState('');
    const [temporaryAddress, setTemporaryAddress] = useState('');
    const [state, setState] = useState('');
    const [aadharNo, setAadharNo] = useState('');
    const [fathersName, setFathersName] = useState('');
    const [mothersName, setMothersName] = useState('');
    const [spouseName, setspouseName] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');


    const navigate = useNavigate();

    // useEffect(() => {
    //     // Fetch constituencies
    //     fetchConstituency()
    //         .then(response => { console.log(response.data); setConstituencies(response.data) })
    //         .catch(error => console.error('Error fetching constituencies:', error));

    //     // Fetch districts
    //     fetchDistrict()
    //         .then(response => setDistricts(response.data))
    //         .catch(error => console.error('Error fetching districts:', error));
    // }, []);THe below code worked! Why this is not working??Need deep dive!!!*

    useEffect(() => {
        const fetchData = async () => {
            try {
                const constituenciesData = await fetchConstituency();
                console.log('Fetched constituencies:', constituenciesData);
                setConstituencies(constituenciesData);

                const districtsData = await fetchDistrict();
                console.log('Fetched districts:', districtsData);
                setDistricts(districtsData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();



        try {

            const response = await axios.post('api/auth/register', {
                username,
                password,
                firstName,
                lastName,
                role,
                selectedConstituency,
                selectedDistrict,
                talukId,
                sex,
                age,
                contactInfo,
                email,
                address,
                permanentAddress,
                temporaryAddress,
                state,
                aadharNo,
                fathersName,
                mothersName,
                spouseName,
                maritalStatus,
            });


            console.log('User registration successful:', response.data);


            localStorage.setItem('token', response.data.token)
            navigate('/');
            alert('sign up sucessful!')
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };
    const handleAadharChange = (e) => {
        const aadharValue = e.target.value.replace(/\D/g, '');
        if (aadharValue.length <= 10) {
            setAadharNo(aadharValue);
        }
    };

    return (
        <div className="container mt-5" style={{ maxWidth: "800px" }}>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title text-center mb-4">Sign Up</h3>
                            <form class="form-group" onSubmit={handleSubmit}>
                                <div mb-3>
                                    <label >
                                        User Name:
                                        <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} />
                                    </label>
                                    <label>
                                        Password:
                                        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </label>
                                    <label>
                                        First Name:
                                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                    </label>
                                    <label>
                                        Last Name:
                                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                    </label>
                                    <label>
                                        Role:
                                        <select value={role} onChange={(e) => setRole(e.target.value)}>
                                            <option value="">Select</option>
                                            <option value="public">Public</option>
                                            <option value="partymember">PartyMember</option>
                                            <option value="admin">Admin</option>
                                        </select>
                                    </label>
                                    <label>
                                        Constituency:
                                        <select value={selectedConstituency} onChange={(e) => setSelectedConstituency(e.target.value)}>
                                            <option value="">Select Constituency</option>
                                            {Array.isArray(constituencies) && constituencies.length > 0 ? constituencies.map(c => (
                                                <option key={c._id} value={c._id}>{c.name}</option>

                                            )) : <option>Loading...</option>}
                                        </select>
                                    </label>
                                    <label>
                                        District:
                                        <select value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)}>
                                            <option value="">Select District</option>
                                            {districts.map(d => (
                                                <option key={d._id} value={d._id}>{d.name}</option>
                                            ))}
                                        </select>
                                    </label>

                                    {/* <label>
                                        Taluk:
                                        <input type="text" value={talukId} onChange={(e) => setTalukId(e.target.value)} />
                                    </label> */}
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
                                        Residential Address:
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
                                        Aadhar No:
                                        <input type="text" value={aadharNo} onChange={handleAadharChange} maxLength={10} />
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
                                    <button class="btn btn-primary" type="submit">Submit For Registration</button></div>
                            </form>
                        </div></div></div></div ></div >
    );
};

export default SignUpForm;

