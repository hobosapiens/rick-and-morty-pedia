import React from 'react';
import preloader from '../../images/preloader.png';
import './preloader.css';

const Preloader = () => {
    return (
        <div className="preloader col-12">
            <img src={preloader} alt="preloader"/>
        </div>
    )
};

export default Preloader;