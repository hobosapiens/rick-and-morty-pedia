import React from 'react';
import { Redirect } from 'react-router-dom';

const LoginPage = ({isLoggedIn, logIn}) => {

    if(!isLoggedIn){
        return (
            <div className="jumbotron">
                <button onClick={logIn} className="btn">LogIn</button>
            </div>
        )
    } else {
        return (
            <Redirect to="/" />
        )
    }
};

export default LoginPage;