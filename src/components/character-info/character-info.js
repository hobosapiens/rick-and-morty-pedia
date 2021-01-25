import React, {Component} from 'react';
import './character-info.css';
import Api from "../../services/api";
import ErrorIndicator from "../error-indicator";
import Preloader from "../preloader";

export default class CharacterInfo extends Component {
    ramApi = new Api();

    state = {
        character: null,
        characterId: null,
        loading: true,
        error: false
    };

    componentDidMount() {
        this.updateCharacter();
    }

    componentDidUpdate(prevProps) {
        if(this.props.characterId !== prevProps.characterId){
            this.updateCharacter();
        }
    }

    updateCharacter = () => {
        const { characterId } = this.props;
        if(!characterId) {
            return;
        }
        this.setState({
            loading: true
        });
        this.ramApi
            .getCharacter(characterId)
            .then(this.onCharacterLoaded)
            .catch(this.onError);
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

    render() {
        const {character, loading, error} = this.state;
        const characterChoose = !error ? <span className="choose-character">CHOOSE A CHARACTER</span> : null;
        const errorMessage = error ? <ErrorIndicator/> : null;

        if (!this.state.character) {

            return (
                <div className="col-lg-7">
                    {characterChoose}
                    {errorMessage}
                </div>
            )

        }

        const hasData = !(loading || error);
        const preloader = loading ? <Preloader/> : null;
        const content = hasData ? <CharacterInfoContent character={character} /> : null;

        return (
            <div className="col-lg-7">
                {preloader}
                {content}
            </div>
        )
    }
};

const CharacterInfoContent = ({character: {imgURL, name, status, species, gender}}) => {
    return (
        <div className="character-info jumbotron">
            <div className="character-info-photo col-lg-4 jumbotron">
                <img src={imgURL} alt={name} />
            </div>
            <div className="character-info-text col-lg-8">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item name">{name}</li>
                    <li className="list-group-item status">{status}</li>
                    <li className="list-group-item species">{species}</li>
                    <li className="list-group-item gender">{gender}</li>
                </ul>
            </div>
        </div>
    )
}