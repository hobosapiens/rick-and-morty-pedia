import React from 'react';
import { Redirect } from 'react-router-dom';

const AdminPage = ({ isLoggedIn, onApiChange, apiType }) => {

    if(isLoggedIn){
        return (
            <div className="jumbotron text-center admin">
                <div className="admin-text">Welcome to the super-preferred admin page.<br />Where you can change API from real to fake --><br /><b>Current API: {apiType}</b></div>
                <button onClick={onApiChange} className="btn btn-outline-primary admin-btn">Change API</button>
            </div>
        )
    } else {
        return <Redirect to="/login" />
    }
};

export default AdminPage;