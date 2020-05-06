import React from 'react';
import { Link } from 'react-router-dom';


function NavHome() {
  return (
      <nav>
          <h4>Welcome To This App</h4>
          <ul className="nav-links">
    
            <Link to="/login">
            <li>Login</li>
            </Link>

            <Link to="/signup">
            <li>Signup</li>
            </Link>

          </ul>
      </nav>
  );
}
export default NavHome;