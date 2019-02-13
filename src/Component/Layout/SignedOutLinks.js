import React from 'react';
import { signOut } from '../../Store/Actions/authAction';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const SignedOutLinks = (props) => {
    return (
        <ul className="right">
            <li>
                <Link to="/settings" profile={props.profile}>Settings</Link>
            </li>
            <li>
                <Link to="/signin" onClick={props.signOut}>Sign Out</Link>
            </li>
            <li>
                <button className="btn-floating">NN</button>
            </li>
        </ul>
    )
}


const mapDispatchToProps = (dispatch) => {

    return {
        signOut: () => dispatch(signOut())
    }
}



export default connect(
    null,
    mapDispatchToProps,
)(SignedOutLinks);