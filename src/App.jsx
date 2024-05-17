
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/homePage';
import EInformation from './Pages/ElectoralInformation/electoralInformation';

import SignIn from './Pages/SignIn/signIn';
import SignUpForm from './components/RegistrationForm/signUp';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import UserProfilePage from './Pages/UserProfile/userProfile';
import { useEffect, useState } from 'react';
import PollPage from './Pages/Votecast/voteCast.Page.jsx';
import GamificationPage from './Pages/Gamification/gamiFicationPage.jsx';

const Navigation = () => {

  return (

    <header>

      <nav className="sidebar">
        <ul>
          <li>
            <Link to="/">Election Monitor</Link>
          </li>
          <li>
            <Link to="/electoral-info">Election News</Link>
          </li>
          <li>
            <Link to="/vote-out">Election Assist</Link>
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
      <Route path="/poll-page" Component={PollPage} />
      <Route path="/sign-in" Component={SignIn} />
      <Route path="/sign-up" Component={SignUpForm} />
      <Route path="/my-profile" Component={UserProfilePage} />
      <Route path="/gamification" Component={GamificationPage} />
    </Routes>

  );
};



const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {

    const token = localStorage.getItem('token');

    if (token) {
      setAuthenticated(true);

    } else {
      setAuthenticated(false);
    }
  }, []);


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
