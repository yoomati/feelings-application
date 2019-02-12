import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../Store/Actions/projectAction';

class CreatePost extends Component {
    state = {
        content: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createPost(this.state);
        this.setState({
            content: "",
        })
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h4>Share your feelings with peoples</h4>
                <div className="input-field">
                    <textarea id="textarea2" className="materialize-textarea"
                        data-length="120" onChange={this.handleChange} value={this.state.content}></textarea>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-2"> Add Post</button>
                </div>

            </form >
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (newProject) => dispatch(createProject(newProject))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(CreatePost);