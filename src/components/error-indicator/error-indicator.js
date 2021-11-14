import React from 'react';
import './error-indicator.css';
import icon from './death-star.png'

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img className="error-icon" src={icon} alt="error icon"/>
            <div className="boom">BOOM!</div>
            <span>
                something has gone terribly wrong
            </span>
            <span>
                (but we already sent droids to fix it)
            </span>
        </div>
    );
};

export default ErrorIndicator;
