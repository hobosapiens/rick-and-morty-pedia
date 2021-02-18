import React from 'react';
import { Redirect } from 'react-router-dom';
import './pages.css';

const LoginPage = ({isLoggedIn, logIn}) => {

    if(!isLoggedIn){
        return (
            <div className="jumbotron login">
                <div className="login-text">
                    This is a primitive user login system.<br />After you log in, you can enter the admin page -->
                </div>
                <button onClick={logIn} className="btn btn-outline-primary login-btn">LogIn</button>
            </div>
        )
    } else {
        return (
            <Redirect to="/" />
        )
    }
};

export default LoginPage;