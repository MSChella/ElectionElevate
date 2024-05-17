import React, { useState } from 'react';

const Challenge = ({ onComplete }) => {
    const [isCompleted, setIsCompleted] = useState(false);

    const handleComplete = () => {
        setIsCompleted(true);
        onComplete(20); // Award 20 points for completing the challenge
    };

    return (
        <div className="challenge">
            <h3>Complete this challenge to earn points!</h3>
            <button onClick={handleComplete} disabled={isCompleted}>
                Complete Challenge
            </button>
            {isCompleted && <p>Challenge Completed! You've earned 20 points.</p>}
        </div>
    );
};

export default Challenge;
