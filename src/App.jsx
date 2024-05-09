import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/homePage';
import EInformation from './Pages/ElectoralInformation/electoralInformation';
import VoteOut from './Pages/VoteOut/voteOut';
import SignIn from './Pages/SignIn/signIn';
import SignUpForm from './components/RegistrationForm/signUp';

const Navigation = () => {

  return (

    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/electoral-info">Electoral Information</Link>
          </li>
          <li>
            <Link to="/vote-out">Vote Out</Link>
          </li>
          <li>
            <Link to="/sign-in">Sign In </Link>
          </li>
          <li>
            <Link to="/sign-up">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </header>

  )
}

const AppRoutes = () => {

  return (

    <Routes>
      <Route path="/" exact Component={HomePage} />
      <Route path="/electoral-info" Component={EInformation} />
      <Route path="/vote-out" Component={VoteOut} />
      <Route path="/sign-in" Component={SignIn} />

      <Route path="/sign-up" Component={SignUpForm} />
    </Routes>

  );
};

const App = () => {
  return (
    <Router>
      <Navigation />
      <AppRoutes />

    </Router>
  );
};

export default App;
