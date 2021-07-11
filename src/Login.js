import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from './firebase';
import './Login.css';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
    const [state, dispatch] = useStateValue();

const signIn = () => {
    auth.signInWithPopup(provider)
    .then(result => {
        console.log(result)
        dispatch({
            type: actionTypes.SET_USER,
            user: result.user
        })
    }).catch(error => {
        alert(error.message)
    })
}

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://callmenick.com/dev/slack-logo-animation-css/slack-logo-featured.png"
                    alt=""
                />
                <h1>Sign in the Slack Clone</h1>
                <p>strawhatrick.slack-clone.com</p>
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login;