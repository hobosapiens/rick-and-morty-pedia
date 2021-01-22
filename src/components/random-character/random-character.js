import React, {Component} from 'react';
import './random-character.css';
import Api from "../../services/api";
import Preloader from "../preloader";
import ErrorIndicator from "../error-indicator";

export default class RandomCharacter extends Component {

    ramApi = new Api();

    state = {
        character: {},
        loading: true,
        prevBtnDisabled: false,
        nextBtnDisabled: false
    };

    componentDidMount() {
        this.updateCharacter(this.randomId());
        this.interval = setInterval(() => {
            this.updateCharacter(this.randomId());
            console.log('refresh');
        }, 6000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    randomId = () => {
        return Math.floor(Math.random() * (671 - 1) + 1);
    };

    onCharacterLoaded = (character) => {
        this.setState({
            character,
            loading: false,
            error: false
        })
    };

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    };

    updateCharacter = (id) => {
        this.ramApi
            .getCharacter(id)
            .then(this.onCharacterLoaded)
            .catch(this.onError);
    };

    prevCharacter = () => {
        if(this.state.character.id <= 1){
            this.setState({prevDisabled: true})
        } else {
            this.setState({prevDisabled: false});
            this.updateCharacter(this.state.character.id - 1);
            clearInterval(this.interval);
        }
    };

    nextCharacter = () => {
        if(this.state.character.id === 671){
            this.setState({nextDisabled: true})
        } else {
            this.setState({nextDisabled: false});
            this.updateCharacter(this.state.character.id + 1);
            clearInterval(this.interval);
        }
    };

    render() {
        const {character, loading, error, prevBtnDisabled, nextBtnDisabled} = this.state;
        const hasData = !(loading || error);

        const errorMessage = error ? <ErrorIndicator/> : null;
        const preloader = loading ? <Preloader/> : null;
        const content = hasData ? <CharacterContent character={character}
                                                    prevBtnDisabled={prevBtnDisabled}
                                                    nextBtnDisabled={nextBtnDisabled}
                                                    prevCharacter={this.prevCharacter}
                                                    nextCharacter={this.nextCharacter}/> : null;

        return (
            <div className="random-character col-lg-12 jumbotron">
                {errorMessage}
                {preloader}
                {content}
            </div>
        )
    }
};

const CharacterContent = ({prevCharacter, nextCharacter, prevBtnDisabled, nextBtnDisabled, character: {imgURL, name, status, species, gender}}) => {
    const prevBtnClass = prevBtnDisabled ? 'disabled' : '';
    const nextBtnClass = nextBtnDisabled ? 'disabled' : '';
    return (
        <React.Fragment>
            <div className="random-character-buttons">
                <button className={'btn btn-outline-primary ' + prevBtnClass}
                        onClick={prevCharacter}>PREV</button>
                <button className={'btn btn-outline-primary ' + nextBtnClass}
                        onClick={nextCharacter}>NEXT</button>
            </div>
            <div className="random-character-photo jumbotron">
                <img src={imgURL} alt={name} className="random-character-avatar"/>
            </div>
            <div className="random-character-info">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item name"><span>Name: </span><span>{name}</span></li>
                    <li className="list-group-item status"><span>Status: </span><span>{status}</span></li>
                    <li className="list-group-item species"><span>Species: </span><span>{species}</span></li>
                    <li className="list-group-item gender"><span>Gender: </span><span>{gender}</span></li>
                </ul>
            </div>
        </React.Fragment>

    )
};