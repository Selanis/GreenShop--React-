import './styles.scss';
import './Data.scss';
import React from 'react';

function Preloader() {
    return (
        <div className="preloader">
            <img className="preloader__logo" id="preloader" src="preloader.svg" width="50px" height="50px" alt="preloader" />
        </div>
    )
}

export { Preloader }