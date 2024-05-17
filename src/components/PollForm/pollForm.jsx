import React, { useState } from 'react';
import '../PollForm/style.css';

const CreatePollForm = ({ onCreate }) => {
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState(['', '', '', '']);

    const handleOptionChange = (index, value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPoll = {
            question,
            options: options.map(option => ({ text: option, votes: 0 }))
        };
        onCreate(newPoll);
        setQuestion('');
        setOptions(['', '', '', '']);
    };

    return (
        <form className="create-poll-form" onSubmit={handleSubmit}>
            <h3>Create a Poll</h3>
            <div>
                <label>Question</label>
                <input
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    required
                />
            </div>
            <div>
                {options.map((option, index) => (
                    <div key={index}>
                        <label>Option {index + 1}</label>
                        <input
                            value={option}
                            onChange={(e) => handleOptionChange(index, e.target.value)}
                            required
                        />
                    </div>
                ))}
            </div>
            <button type="submit">Create Poll</button>
        </form>
    );
};

export default CreatePollForm;
