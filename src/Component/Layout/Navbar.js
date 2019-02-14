import React from 'react';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Navbar = (props) => {
    const { auth } = props;
    return (
        <React.Fragment>
            <nav className="nav-wrapper indigo lighten-3 hide-on-med-and-down ">
                <div className="container ">
                    <ul className="">
                        <li>
                            <NavLink to="/" className="brand-logo">Dashboard</NavLink>
                        </li>

                    </ul>
                    {auth.uid ? <SignedOutLinks /> : <SignedInLinks />}
                </div>
            </nav>
            <nav className="nav-wrapper indigo lighten-3 hide-on-large-only">
                <div className="container">
                    <ul className="left ">
                        <li >
                            <NavLink to="/" className="brand-logo left hide-on-small-only">Dashboard</NavLink>
                            <NavLink to="/" className="brand-logo left show-on-small-only">Dashboard</NavLink>
                        </li>
                    </ul>
                    {auth.uid ? <SignedOutLinks /> : <SignedInLinks />}
                </div>
            </nav>
        </React.Fragment>

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