import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import Modal from './../modal';
import './header.css';

const Header = () => {

    const modal = useRef(null);

    return (
        <nav className="header">
            <ul className="header-menu">
                <li className="menu-home">
                    <NavLink to="/" className="btn btn-outline-primary nav-link" exact>#</NavLink>
                </li>
                <li className="menu-page">
                    <NavLink to="/characters/" className="btn btn-outline-primary nav-link">/characters</NavLink>
                </li>
                <li className="menu-page">
                    <NavLink to="/locations/" className="btn btn-outline-primary nav-link">/locations</NavLink>
                </li>
                <li className="menu-page">
                    <NavLink to="/episodes/" className="btn btn-outline-primary nav-link">/episodes</NavLink>
                </li>
                <li className="menu-login">
                    <NavLink to="/login" className="btn btn-outline-primary nav-link">Login</NavLink>
                </li>
                <li className="menu-admin">
                    <NavLink to="/admin" className="btn btn-outline-primary nav-link">Admin</NavLink>
                </li>
                <li className="menu-information">
                    <button type="button" onClick={() => modal.current.open()}>i</button>
                    <Modal ref={modal}>Project information</Modal>
                </li>
            </ul>
        </nav>
    )
};

export default Header;