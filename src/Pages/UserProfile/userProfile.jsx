import React from 'react';
import UserProfileCard from '../../components/UserProfile/userProfileCard'; // Import the UserProfileCard component

const UserProfilePage = () => {
    // Sample user data
    const user = {
        name: 'User Name',
        age: 23,
        email: 'user.name@example.com',
        address: '123 Fourth St, Fifth Avenue, India',
        contact: '123-456-7890',
        avatar: 'https://example.com/avatar.jpg'
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h1>My Profile</h1>
                    <UserProfileCard user={user} />
                </div>
            </div>
        </div>
    );
};

export default UserProfilePage;
