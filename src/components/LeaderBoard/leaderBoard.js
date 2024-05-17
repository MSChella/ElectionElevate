import React from 'react';

const Leaderboard = ({ leaderboard }) => {
    return (
        <div>
            <ul>
                {leaderboard.map((user, index) => (
                    <li key={index}>
                        {index + 1}. {user.name} - {user.points} points
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Leaderboard;
