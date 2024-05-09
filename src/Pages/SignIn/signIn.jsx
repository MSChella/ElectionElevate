import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../SignIn/style.css';




const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [authenticated, setAuthenticated] = useState(!!localStorage.getItem('token'));

    const navigate = useNavigate();
    const handleSignin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/auth/signin', { username, password });
            console.log('Signin successful:', response.data);

            localStorage.setItem('token', response.data.token)
            setAuthenticated(true);
            navigate('/');
        } catch (error) {
            console.error('Error during signin:', error.response.data.message);

        }
    };


    const handleSignup = () => {

        navigate('/sign-up');
    };
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title text-center mb-4">Sign In</h3>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                                    <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                                </div>
                                <button type="submit" onClick={handleSignin} className="btn btn-primary w-100">Sign In</button>



                                <div className="mt-3">
                                    <p>If you don't have an account, <span onClick={handleSignup} style={{ cursor: 'pointer', color: 'blue' }}>Sign Up here</span>.</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
