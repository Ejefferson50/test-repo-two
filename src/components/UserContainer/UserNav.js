import React from 'react';
import { Link } from 'react-router-dom';


function UserNav() {

    return(
        <nav>
            <ul>
            <Link to="/user-stats">
            <li>My Stats</li>
            </Link>

            <Link to="/user">
            <li>My Home</li>
            </Link>

            </ul>
        </nav>
    );
}

export default UserNav;