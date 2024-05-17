import React, { useState } from 'react';
import '../Polls/style.css';

const VoteCard = ({ poll }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [showResults, setShowResults] = useState(false);
    const [results, setResults] = useState(poll.options);

    const handleVote = () => {
        if (selectedOption) {
            const updatedResults = results.map(option => {
                if (option.text === selectedOption) {
                    return { ...option, votes: option.votes + 1 };
                }
                return option;
            });
            setResults(updatedResults);
            setShowResults(true);
        }
    };

    return (
        <div className="vote-card">
            <h3>{poll.question}</h3>
            {showResults ? (
                <div className="results">
                    {results.map(option => (
                        <div key={option.text} className="result-bar">
                            <span>{option.text}</span>
                            <div className="bar" style={{ width: `${(option.votes / results.reduce((acc, opt) => acc + opt.votes, 0)) * 100}%` }}>
                                {((option.votes / results.reduce((acc, opt) => acc + opt.votes, 0)) * 100).toFixed(2)}%
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="options">
                    {poll.options.map(option => (
                        <label key={option.text}>
                            <input
                                type="radio"
                                name="option"
                                value={option.text}
                                checked={selectedOption === option.text}
                                onChange={(e) => setSelectedOption(e.target.value)}
                            />
                            {option.text}
                        </label>
                    ))}
                    <button onClick={handleVote}>Submit</button>
                </div>
            )}
        </div>
    );
};

export default VoteCard;
