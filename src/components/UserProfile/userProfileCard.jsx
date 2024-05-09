import React from 'react';

const UserProfileCard = ({ user }) => {
    return (
        <div className="card">
            <img src={user.avatar} className="card-img-top" alt="User Avatar" />
            <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">Age: {user.age}</p>
                <p className="card-text">Email: {user.email}</p>
                <p className="card-text">Address: {user.address}</p>
                <p className="card-text">Contact: {user.contact}</p>
                <a href="#" className="btn btn-primary">View Profile</a>
            </div>
        </div>
    );
};

export default UserProfileCard;
