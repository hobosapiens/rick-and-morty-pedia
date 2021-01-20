import React from 'react';
import './character-info.css';

const CharacterInfo = () => {
    return (
        <div className="character-info col-lg-7 jumbotron">
            <div className="character-info-photo col-lg-4 jumbotron">
                <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt=""/>
            </div>
            <div className="character-info-text col-lg-8">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item name">Cras justo odio</li>
                    <li className="list-group-item status">Dapibus ac facilisis in</li>
                    <li className="list-group-item species">Vestibulum at eros</li>
                    <li className="list-group-item gender">Vestibulum at eros</li>
                    <li className="list-group-item origin">Vestibulum at eros</li>
                    <li className="list-group-item episode">Vestibulum at eros</li>
                </ul>
            </div>
        </div>
    )
};

export default CharacterInfo;