import React from 'react';
import './error-indicator.css';
import error from './../../images/error.png';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <div className="error-indicator-text">
                <span className="boom">Oooooooops!</span>
                <span>something go wrong</span>
                <span>(but Morty already fixing it)</span>
            </div>
            <div className="error-indicator-img">
                <img src={error} alt="error"/>
            </div>
        </div>
    )
};

export default ErrorIndicator;