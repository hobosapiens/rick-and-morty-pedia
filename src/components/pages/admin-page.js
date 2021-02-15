import React from 'react';
import { Redirect } from 'react-router-dom';

const AdminPage = ({ isLoggedIn }) => {

    if(isLoggedIn){
        return (
            <div className="jumbotron text-center secret-page">
                <h3>Добро пожаловать</h3>
            </div>
        )
    } else {
        return <Redirect to="/login" />
    }
};

export default AdminPage;