import React, {Component} from 'react';
import './random-character.css';
import Api from "../../services/api";

export default class RandomCharacter extends Component {

    ramApi = new Api();

    state = {
        character: {}
    };

    constructor() {
        super();
        this.setCharacter();
    }

    randomId = Math.floor(Math.random() * (671 - 1) + 1);

    onCharacterLoad = (character) => {
        this.setState({character})
    };

    setCharacter() {
        this.ramApi
            .getCharacter(this.randomId)
            .then(this.onCharacterLoad)
    }

    render() {
        const { character: {imgURL, ...infa}} = this.state;
        console.log(this.state);
        return (
            <div className="random-character col-lg-12 jumbotron">
                <div className="random-character-photo jumbotron">
                    <img src={imgURL} alt=""/>
                </div>
                <div className="random-character-info">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item name"><span>Name: </span><span>{infa.name}</span></li>
                        <li className="list-group-item status"><span>Status: </span><span>{infa.status}</span></li>
                        <li className="list-group-item species"><span>Species: </span><span>{infa.species}</span></li>
                        <li className="list-group-item gender"><span>Gender: </span><span>{infa.gender}</span></li>
                    </ul>
                </div>
            </div>
        )
    }
};