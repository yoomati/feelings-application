import React from 'react';
import { signOut } from '../../Store/Actions/authAction';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const SignedOutLinks = (props) => {
    console.log(props)
    return (
        <ul className="right">
            <li>
                <Link to="/settings" profile={props.profile}>Settings</Link>
            </li>
            <li>
                <Link to="/signin" onClick={props.signOut}>Sign Out</Link>
            </li>
            <li>
                <button className="btn-floating">{props.profile.initials}</button>
            </li>
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        signOut: () => dispatch(signOut())
    }
}



export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignedOutLinks);