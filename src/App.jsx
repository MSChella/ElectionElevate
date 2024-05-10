
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/homePage';
import EInformation from './Pages/ElectoralInformation/electoralInformation';
import VoteOut from './Pages/VoteOut/voteOut';
import SignIn from './Pages/SignIn/signIn';
import SignUpForm from './components/RegistrationForm/signUp';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import UserProfilePage from './Pages/UserProfile/userProfile';

const Navigation = () => {

  return (

    <header>

      <nav className="sidebar">
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
            <Link to="/my-profile">My Profile</Link>
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
      <Route path="/my-profile" Component={UserProfilePage} />
    </Routes>

  );
};

const App = () => {
  return (
    <Router>
      <Header />
      <Navigation />
      <AppRoutes />
      <Footer />
    </Router>
  );
};

export default App;
