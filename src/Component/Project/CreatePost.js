import React, { Component } from "react";
import { connect } from "react-redux";
import { createProject } from "../../Store/Actions/projectAction";

class CreatePost extends Component {
  state = {
    content: "",
    error: ""
  };

  handleSubmit = e => {
    const { error, ...noError } = this.state;
    e.preventDefault();
    if (this.state.content.length >= 3) {
      this.props.createPost(noError);
      this.setState({
        content: "",
        error: ""
      });
    } else {
      let that = this;
      this.setState({
        error: "write something "
      });
      setTimeout(function() {
        that.setState({
          error: ""
        });
      }, 5000);
    }
  };

  handleChange = e => {
    this.setState({
      content: e.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Share your feelings with people</h4>
        <div className="input-field">
          <textarea
            id="textarea2"
            className="materialize-textarea"
            data-length="120"
            onChange={this.handleChange}
            value={this.state.content}
          />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-2"> Add Post</button>
        </div>
        {this.state.error && <p className="red-text"> {this.state.error}</p>}
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createPost: newProject => dispatch(createProject(newProject))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreatePost);
