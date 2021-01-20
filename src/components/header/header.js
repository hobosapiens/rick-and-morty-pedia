import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className="bs-component header">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Rick'N'Mortypedia</a>
                    <div className="collapse navbar-collapse" id="navbarColor03">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="Characters">Characters</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="Loctions">Loctions</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="Episodes">Episodes</a>
                            </li>
                        </ul>
                    </div>
                </nav>
        </div>
    )
};

export default Header;