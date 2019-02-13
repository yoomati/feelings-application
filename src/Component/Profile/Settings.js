import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';
import { changeName } from '../../Store/Actions/authAction';

class Settings extends Component {
    state = {
        firstName: "",
        lastName: ""
    }
    interval = null;

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.props)
        this.props.changeName(this.state)
    }

    componentDidMount() {
        const that = this;
        this.interval = setInterval(function () {
            console.log('dzialam')
            if (isLoaded(that.props.profile)) {
                that.setState({
                    firstName: that.props.profile.firstName,
                    lastName: that.props.profile.lastName
                })
                clearInterval(that.interval);
            }
        }, 500)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        if (isLoaded(this.props.profile)) {
            return (
                <div className="container section" >
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-field">
                            <input type="text" id="firstName" value={this.state.firstName} onChange={this.handleChange} />
                            <label htmlFor="firstName" className="active">Your first Name</label>
                        </div>
                        <div className="input-field">
                            <input type="text" id="lastName" value={this.state.lastName} onChange={this.handleChange} />
                            <label htmlFor="lastName" className="active">Your Last Name</label>
                        </div>
                        <div className="input-field center">
                            <button className="btn ">Save</button>
                        </div>
                    </form>
                </div>
            )
        }
        else {
            return (
                <div className="section center">
                    <p>Loading settings...</p>
                </div>
            )
        }
    }

}

const mapStateToProps = (state) => {

    return {
        profile: state.firebase.profile
    }
}

const mapDisatchToProps = (dispatch) => {
    return {
        changeName: (name) => dispatch(changeName(name))
    }
}


export default connect(
    mapStateToProps,
    mapDisatchToProps
)(Settings);