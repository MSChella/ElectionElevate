import React, { useState } from 'react';
import VoteCard from '../../components/Polls/pollCard';
import SuggestionForm from '../../components/PollSuggestionForm/suggestionForm';
import CreatePollForm from '../../components/PollForm/pollForm';
import '../Votecast/style.css';

const PollPage = () => {
    const [polls, setPolls] = useState([]);
    const [suggestions, setSuggestions] = useState([]);

    const handleCreatePoll = (newPoll) => {
        setPolls([...polls, newPoll]);
    };

    const handleSuggestionSubmit = (suggestion) => {
        setSuggestions([...suggestions, suggestion]);
    };

    return (
        <div className="poll-page">
            <section className="poll-section">
                <h2>Open Polls</h2>
                {polls.map((poll, index) => (
                    <VoteCard key={index} poll={poll} />
                ))}
            </section>

            <section className="create-poll-section">
                <h2>Create a Poll</h2>
                <CreatePollForm onCreate={handleCreatePoll} />
            </section>

            <section className="suggestion-section">
                <h2>Suggestions</h2>
                <SuggestionForm onSubmit={handleSuggestionSubmit} />
                <ul>
                    {suggestions.map((suggestion, index) => (
                        <li key={index}>{suggestion}</li>
                    ))}
                </ul>
            </section>
        </div>

    );
};

export default PollPage;
