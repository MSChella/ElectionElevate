import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import style from './style.css';




const Header = () => {
    const [authenticated, setAuthenticated] = useState(!!localStorage.getItem('token'));
    const navigate = useNavigate();
    const handleSignout = () => {

        localStorage.removeItem('token');
        setAuthenticated(false);
        navigate('/');
        alert('Have sucessfully signed out!');
    };


    return (
        <div className="site-name"> <p className='sticky'>ELEVATE ELECTION @ Go Digital India!!</p>

            <nav className={`navbar navbar-expand-lg navbar-light custom-header-bg ${style.sticky}`}>
                <div className="container">


                    <Link className="navbar-brand" to="/">
                        Logo
                    </Link>
                    <div className="container d-flex justify-content-center">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav mx-auto justify-content-center px-5">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link" to="/electoral-info">
                                        Election Pulse
                                    </Link>
                                    <div className="dropdown-content">
                                        <Link className="nav-link" to="/poll-page">
                                            Votecast!
                                            <Link className="nav-link" to="/gamification">
                                                GameOn!
                                            </Link>
                                        </Link>
                                    </div>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/dashboard">
                                        Dashboard
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="d-flex px-1">
                        <Link className="nav-link" to="/sign-in">
                            Sign In
                        </Link>
                        <Link className="nav-link" to="/sign-up">
                            Sign Up
                        </Link>
                    </div>
                    <div>
                        <button type="button" onClick={handleSignout} className="btn btn-danger w-100 mt-3">Sign Out</button>

                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Header;
