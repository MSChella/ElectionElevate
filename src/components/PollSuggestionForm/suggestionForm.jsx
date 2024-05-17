import React, { useState } from 'react';
import '../PollSuggestionForm/style.css';

const SuggestionForm = ({ onSubmit }) => {
    const [suggestion, setSuggestion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(suggestion);
        setSuggestion('');
    };

    return (
        <form className="suggestion-form" onSubmit={handleSubmit}>
            <h3>Send a Suggestion</h3>
            <textarea
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
                placeholder="Enter your suggestion"
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default SuggestionForm;
