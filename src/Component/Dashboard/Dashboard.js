import React from 'react';
import CreateProject from '../Project/CreatePost';
import ProjectList from '../Project/ProjectList';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Notification from './Notification'


const Dashboard = (props) => {
    const { projects, auth, notification } = props;
    console.log(notification);
    if (!auth.uid) return <Redirect to="/signin"></Redirect>
    return (
        <div className="container section">
            <div className="row">
                <div className="col s12 l8">
                    <CreateProject />
                    <ProjectList projects={projects} />
                </div>
                <div className="col s12 l4 ">
                    <Notification notification={notification} />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        projects: state.firestore.ordered.project,
        auth: state.firebase.auth,
        notification: state.firestore.ordered.notifications
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'project', limit: 5 },
        { collection: 'notifications', limit: 5 }
    ])
)(Dashboard);