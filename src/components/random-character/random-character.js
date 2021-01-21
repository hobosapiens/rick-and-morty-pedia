import React, {Component} from 'react';
import './random-character.css';
import Api from "../../services/api";
import Preloader from "../preloader";

export default class RandomCharacter extends Component {

    ramApi = new Api();

    state = {
        character: {},
        loading: true
    };

    constructor() {
        super();
        this.setCharacter();
    }

    randomId = Math.floor(Math.random() * (671 - 1) + 1);

    onCharacterLoad = (character) => {
        this.setState({
            character,
            loading: false
        })
    };

    setCharacter() {
        this.ramApi
            .getCharacter(this.randomId)
            .then(this.onCharacterLoad)
    }

    render() {
        const { character: {imgURL ,name, status, species, gender }, loading} = this.state;
        const preloader =  loading ? <Preloader /> : null;
        const avatar  =  loading ? null : <CharacterAvatar imgURL={imgURL} name={name} />;

        return (
            <div className="random-character col-lg-12 jumbotron">
                <div className="random-character-photo jumbotron">
                    {preloader}
                    {avatar}
                </div>
                <div className="random-character-info">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item name"><span>Name: </span><span>{name}</span></li>
                        <li className="list-group-item status"><span>Status: </span><span>{status}</span></li>
                        <li className="list-group-item species"><span>Species: </span><span>{species}</span></li>
                        <li className="list-group-item gender"><span>Gender: </span><span>{gender}</span></li>
                    </ul>
                </div>
            </div>
        )
    }
};

const CharacterAvatar = ({imgURL, name}) => {
    return (
        <React.Fragment>
            <img src={imgURL} alt={name} className="random-character-avatar" />
        </React.Fragment>
    )
};