import React from 'react';
import RandomCharacter from "../random-character";
import rick from './../../images/rick.png';

const Homepage = () => {
    return (
        <React.Fragment>
            <RandomCharacter/>
            <div className="jumbotron text-center homepage">
                <div className="homepage-text">
                    Welcome to Rick And Morty cartoon database.<br/>
                    Here you can find all the characters, locations and episodes of the series.<br/>
                    You can search and count all the clones of Morty or Rick, or whatever. Have fun!
                </div>
                <div className="homepage-img">
                    <img src={rick} alt="rick"/>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Homepage;