import React from 'react';
import RandomCharacter from "../random-character";

const Homepage = () => {
    return (
        <React.Fragment>
            <RandomCharacter />
            <div className="jumbotron text-center homepage">
                <div className="admin-text">Welcome to Rick And Morty cartoon database, have fun.</div>
            </div>
        </React.Fragment>
    )
};

export default Homepage;