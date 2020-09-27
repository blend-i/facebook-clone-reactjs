import React from 'react';
import "./Login.css";
import {auth, provider} from "./firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {

    const [state, dispatch] = useStateValue();


    const signIn = () => {
        //Sign in med provider som i dette tilfellet er google
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        }).catch(error => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login__logo">
                <img className="facebook__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt=""/>
                <img className="facebook__text" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1280px-Facebook_Logo_%282019%29.svg.png" alt=""/>
            </div>

            <button type="submit" onClick={signIn}>Sign In</button>
        </div>
    )
};

export default Login;
