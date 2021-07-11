import React from 'react';
import "./Message.css";

function Message({ message, timestamp, user, userImage }) {
    return (
        <div className="message">
            <img src={userImage} alt="" />
            <div className="message__info">
                <h4>
                    {/* {console.log(new Date(timestamp?.toDate()))} ((.toDate() is a firebase function)) */}
                    {user} <span className="message__timestamp">{new Date(timestamp?.toDate()).toString()}</span>
                </h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Message
