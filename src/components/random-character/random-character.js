import React, {Component} from 'react';
import './random-character.css';

export default class RandomCharacter extends Component {
    state = {
        name: null,
        status: null,
        species: null,
        gender: null,
        origin: null,
        episode: null
    };

    render(){
        const {name, status, species, gender, origin, episode} = this.state;
        return (
            <div className="random-character col-lg-12 jumbotron">
                <div className="random-character-photo jumbotron">
                    <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt=""/>
                </div>
                <div className="random-character-info">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item name">{name}</li>
                        <li className="list-group-item status">{status}</li>
                        <li className="list-group-item species">{species}</li>
                        <li className="list-group-item gender">{gender}</li>
                        <li className="list-group-item origin">{origin}</li>
                        <li className="list-group-item episode">{episode}</li>
                    </ul>
                </div>
            </div>
        )
    }
};