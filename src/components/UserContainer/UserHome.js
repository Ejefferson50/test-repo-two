import React from 'react';

import UserNav from './UserNav';

function UserHome() {
    return(
        <div className="user-home">
        <UserNav />
        <h1>Greetings User</h1>
        </div>
    );
}

export default UserHome;