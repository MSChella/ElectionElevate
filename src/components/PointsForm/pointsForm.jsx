import React, { useState } from 'react';

const PointsForm = ({ points, onSubmit }) => {
    const [activity, setActivity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const pointsEarned = calculatePoints(activity);
        onSubmit(pointsEarned);
        setActivity('');
    };

    const calculatePoints = (activity) => {
        // Example points calculation logic
        switch (activity) {
            case 'poll':
                return 10;
            case 'discussion':
                return 5;
            case 'suggestion':
                return 15;
            default:
                return 0;
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="activity">Select Activity:</label>
                <select
                    id="activity"
                    value={activity}
                    onChange={(e) => setActivity(e.target.value)}
                >
                    <option value="">--Choose an activity--</option>
                    <option value="poll">Participate in a Poll</option>
                    <option value="discussion">Join a Discussion</option>
                    <option value="suggestion">Make a Suggestion</option>
                </select>
            </div>
            <button type="submit">Submit</button>
            <p>Your current points: {points}</p>
        </form>
    );
};

export default PointsForm;
