import React from 'react';
import moment from 'moment';

const Notification = (props) => {
    const { notification } = props;
    return (
        <div className="section">
            <div className="card">
                <div className="card-content">
                    <span className="card-title">
                        Notification
                    </span>
                    <ul className="notifications">
                        {notification && notification.map(item => {
                            return (
                                <li key={item.id}>
                                    <span className="pink-text">{item.user}</span>
                                    <span> {item.content}</span>
                                    <div className="grey-text note-date">
                                        {moment(item.time.toDate()).fromNow()}
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Notification;