import React from 'react';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Navbar = (props) => {
    const { auth } = props;
    return (
        <nav className="nav-wrapper indigo lighten-3">
            <div className="container">
                <ul className="left ">
                    <li>
                        <NavLink to="/" className="brand-logo">Dashboard</NavLink>
                    </li>
                </ul>
                {auth.uid ? <SignedOutLinks /> : <SignedInLinks />}
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(
    mapStateToProps
)(Navbar);