import React, { Component } from "react";
import { connect } from "react-redux";
import { addComment } from "../../Store/Actions/projectAction";
import moment from "moment";

class SinglePost extends Component {
  state = {
    text: "",
    error: "",
    projectId: this.props.project.id
  };

  handleSubmit = e => {
    const { error, ...noError } = this.state;
    e.preventDefault();
    if (this.state.text.length >= 1) {
      this.props.addComment(noError);
      this.setState({
        text: "",
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
      text: e.target.value
    });
  };

  render() {
    const { project } = this.props;
    if (project.comments !== undefined) {
      if (project.comments.length >= 2) {
        project.comments.sort(
          (a, b) => b.createdAt.seconds - a.createdAt.seconds
        );
      }
    }

    const comments =
      project.comments.length > 0 ? (
        project.comments.map(comment => {
          return (
            <div className="row" key={comment.id}>
              <div className="col s8 l6">
                <p>
                  {comment.authorFirstName} {comment.authorLastName}:{" "}
                  {comment.content}
                </p>
              </div>
              <div className="col s2 l5 offset-l1 offset-s2">
                <p className="grey-text text-lighten-1 right  ">
                  {moment(comment.createdAt.toDate()).calendar()}
                </p>
              </div>
            </div>
          );
        })
      ) : (
        <p>No comments</p>
      );
    return (
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title center green-text text-darken-1">
            <h4>
              {project.authorFirstName} {project.authorLastName}
            </h4>
          </span>
          <p>{project.content}</p>
          <p className="grey-text text-lighten-1 ">
            {moment(project.date.toDate()).calendar()}
          </p>
        </div>
        <div className="card-action ">
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field">
                <div className="col s10 l9">
                  <i className="material-icons prefix ">message</i>
                  <textarea
                    id={"message" + project.id}
                    className="materialize-textarea"
                    onChange={this.handleChange}
                    value={this.state.text}
                  />
                  <label htmlFor={"message" + project.id}>Your comment</label>
                </div>
                <div className="s2 l3">
                  <button className="btn btn-small right">
                    send
                    <i className="material-icons right">send</i>
                  </button>
                </div>
                {this.state.error && (
                  <p className="red-text"> {this.state.error}</p>
                )}
              </div>
            </div>
          </form>
          <div className="comments">{comments}</div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addComment: com => dispatch(addComment(com))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SinglePost);
