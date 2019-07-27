import React, { Component } from "react";
import { connect } from "react-redux";
import { createUser } from "../../Store/Actions/authAction";
import { Redirect } from "react-router-dom";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createUser(this.state);
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <input type="email" id="email" onChange={this.handleChange} />
            <label htmlFor="email">E-mail</label>
          </div>
          <div className="input-field">
            <input type="password" id="password" onChange={this.handleChange} />
            <label htmlFor="password">Password</label>
          </div>
          <div className="input-field">
            <input type="text" id="firstName" onChange={this.handleChange} />
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className="input-field">
            <input type="text" id="lastName" onChange={this.handleChange} />
            <label htmlFor="lastName">Last Name</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-3">Sign Up</button>
          </div>
          {authError && <p className="red-text center">{authError}</p>}
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDistpachToProps = dispatch => {
  return {
    createUser: creds => dispatch(createUser(creds))
  };
};

export default connect(
  mapStateToProps,
  mapDistpachToProps
)(SignIn);
