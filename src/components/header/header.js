import React from 'react';
import { Link } from 'react-router-dom';
import Modal from './../modal';
import modal from "../modal/modal";
import './header.css';

const Header = () => {
    return (
        <nav className="header">
            <ul className="header-menu">
                <li className="menu-page">
                    <Link to="/characters/" className="btn btn-outline-primary nav-link">Characters</Link>
                </li>
                <li className="menu-page">
                    <Link to="/locations/" className="btn btn-outline-primary nav-link">Locations</Link>
                </li>
                <li className="menu-page">
                    <Link to="/episodes/" className="btn btn-outline-primary nav-link">Episodes</Link>
                </li>
                <li className="menu-login">
                    <Link to="/login" className="btn btn-outline-primary nav-link">Login</Link>
                </li>
                <li className="menu-admin">
                    <Link to="/admin" className="btn btn-outline-primary nav-link">Admin</Link>
                </li>
                <li className="menu-information">
                    <a href="javascript:void(0)" onClick={() => modal.current.open()}>i</a>
                    <Modal ref={modal}>Project information</Modal>
                </li>
            </ul>
        </nav>
    )
};

export default Header;