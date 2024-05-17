import React, { useState } from 'react';

const PredictionGame = ({ onComplete }) => {
    const [prediction, setPrediction] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        const actualResult = 'Candidate A'; // Example actual result
        if (prediction === actualResult) {
            setIsCorrect(true);
            onComplete(30); // Award 30 points for correct prediction
        }
    };

    return (
        <div className="prediction-game">
            <form onSubmit={handleSubmit}>
                <h3>Who will win the upcoming election?</h3>
                <input
                    type="text"
                    value={prediction}
                    onChange={(e) => setPrediction(e.target.value)}
                    placeholder="Enter your prediction"
                    disabled={isSubmitted}
                />
                <button type="submit" disabled={isSubmitted}>Submit</button>
            </form>
            {isSubmitted && (
                <div className="result">
                    {isCorrect ? 'Your prediction was correct!' : 'Your prediction was incorrect.'}
                </div>
            )}
        </div>
    );
};

export default PredictionGame;
