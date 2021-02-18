import React from 'react';
import { Redirect } from 'react-router-dom';

const AdminPage = ({ isLoggedIn, onApiChange, apiType }) => {

    if(isLoggedIn){
        return (
            <div className="jumbotron text-center admin">
                <div className="admin-text">Welcome to the super-preferred admin page.<br />Where you can change API from real to fake --></div>
                <button onClick={onApiChange} className="btn btn-outline-primary admin-btn">Current API: {apiType}</button>
            </div>
        )
    } else {
        return <Redirect to="/login" />
    }
};

export default AdminPage;