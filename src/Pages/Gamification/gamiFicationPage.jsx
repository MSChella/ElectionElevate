import React, { useState, useEffect } from 'react';
import PointsForm from '../../components/PointsForm/pointsForm';
import Leaderboard from '../../components/LeaderBoard/leaderBoard';
import Quiz from '../../components/Quiz/quizComponent';
import Challenge from '../../components/ChallengeGame/challengeComponent';
import PredictionGame from '../../components/PredictionGame/predictionGame';
import '../Gamification/style.css';

const GamificationPage = () => {
    const [points, setPoints] = useState(0);
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        // Fetch initial points and leaderboard data from API
        fetchPoints();
        fetchLeaderboard();
    }, []);

    const fetchPoints = async () => {
        // Fetch points from the API
        const response = await fetch('/api/points');
        const data = await response.json();
        setPoints(data.points);
    };

    const fetchLeaderboard = async () => {
        // Fetch leaderboard from the API
        const response = await fetch('/api/leaderboard');
        const data = await response.json();
        setLeaderboard(data);
    };

    const handleActivitySubmit = (pointsEarned) => {
        setPoints(points + pointsEarned);
        // Update points on the server
        updatePoints(points + pointsEarned);
    };

    const updatePoints = async (newPoints) => {
        await fetch('/api/points', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ points: newPoints }),
        });
    };

    return (
        <div className="gamification-page">
            <section className="points-section">
                <h2>Your Points</h2>
                <PointsForm points={points} onSubmit={handleActivitySubmit} />
            </section>

            <section className="leaderboard-section">
                <h2>Leaderboard</h2>
                <Leaderboard leaderboard={leaderboard} />
            </section>

            <section className="quizzes-section">
                <h2>Interactive Quizzes</h2>
                <Quiz onComplete={handleActivitySubmit} />
            </section>

            <section className="challenges-section">
                <h2>Challenges</h2>
                <Challenge onComplete={handleActivitySubmit} />
            </section>

            <section className="prediction-game-section">
                <h2>Prediction Games</h2>
                <PredictionGame onComplete={handleActivitySubmit} />
            </section>
        </div>
    );
};

export default GamificationPage;
