import React, { useState } from 'react';

const Quiz = ({ onComplete }) => {
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        const correctAnswer = 'B'; // Example correct answer
        if (selectedAnswer === correctAnswer) {
            setIsCorrect(true);
            onComplete(10); // Award 10 points for correct answer
        }
    };

    return (
        <div className="quiz">
            <form onSubmit={handleSubmit}>
                <h3>What is the capital of France?</h3>
                <div>
                    <label>
                        <input
                            type="radio"
                            value="A"
                            checked={selectedAnswer === 'A'}
                            onChange={(e) => setSelectedAnswer(e.target.value)}
                        />
                        A. Berlin
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            value="B"
                            checked={selectedAnswer === 'B'}
                            onChange={(e) => setSelectedAnswer(e.target.value)}
                        />
                        B. Paris
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            value="C"
                            checked={selectedAnswer === 'C'}
                            onChange={(e) => setSelectedAnswer(e.target.value)}
                        />
                        C. Madrid
                    </label>
                </div>
                <button type="submit" disabled={isSubmitted}>Submit</button>
            </form>
            {isSubmitted && (
                <div className="result">
                    {isCorrect ? 'Correct!' : 'Incorrect. The correct answer is B. Paris.'}
                </div>
            )}
        </div>
    );
};

export default Quiz;
