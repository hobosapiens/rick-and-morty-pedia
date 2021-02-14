import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = ({onApiChange}) => {
    return (
        <div className="bs-component header row">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to="/" className="navbar-brand">Rick'N'Mortypedia</Link>
                    <div className="collapse navbar-collapse" id="navbarColor03">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/characters/" className="nav-link">Characters</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/locations/" className="nav-link">Locations</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/episodes/" className="nav-link">Episodes</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"
                                   onClick={onApiChange}
                                   href="#">Api Change</a>
                            </li>
                        </ul>
                    </div>
                </nav>
        </div>
    )
};

export default Header;