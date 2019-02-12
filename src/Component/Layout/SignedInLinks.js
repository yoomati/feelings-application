import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li>
                <NavLink to="/signup">Register</NavLink>
            </li>
            <li>
                <NavLink to="/signin">Login</NavLink>
            </li>
        </ul>
    )
}

export default SignedInLinks;