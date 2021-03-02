import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './random-character.css';
import Api from "../../services/api";
import Preloader from "../preloader";
import ErrorIndicator from "../error-indicator";
import close from './../../images/close.svg'
import show from './../../images/show.svg'
import {withApi} from "../hoc";

class RandomCharacterWrapped extends Component {
    static defaultProps = {
        updateInterval: 6000
    };

    static propTypes = {
        updateInterval: PropTypes.number
    };

    state = {
        character: {},
        charctersCount: 671,
        loading: true,
        prevBtnDisabled: false,
        nextBtnDisabled: false,
        hideContent: false
    };

    componentDidMount() {
        const {updateInterval} = this.props;
        this.updateCharacter(this.randomId());
        this.updateCharactersCount();
        this.interval = setInterval(() => {
            this.updateCharacter(this.randomId());
        }, updateInterval);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    randomId = () => {
        return Math.floor(Math.random() * (this.state.charctersCount - 1) + 1);
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

    updateCharactersCount = () => {
        if (this.props.ramApi.getAllCharactersInfo) {
            this.props.ramApi
                .getAllCharactersInfo()
                .then((body) => {
                    this.setState({
                        charctersCount: body.count
                    })
                })
        }
    };

    updateCharacter = (id) => {
        this.props.ramApi
            .getCharacter(id)
            .then(this.onCharacterLoaded)
            .catch(this.onError);
    };

    prevCharacter = () => {
        if (this.state.character.id === 1) {
            this.setState({prevBtnDisabled: true})
        } else {
            this.setState({prevBtnDisabled: false, nextBtnDisabled: false});
            this.updateCharacter(this.state.character.id - 1);
            clearInterval(this.interval);
        }
    };

    nextCharacter = () => {
        if (this.state.character.id === this.state.charctersCount) {
            this.setState({nextBtnDisabled: true})
        } else {
            this.setState({prevBtnDisabled: false, nextBtnDisabled: false});
            this.updateCharacter(this.state.character.id + 1);
            clearInterval(this.interval);
        }
    };

    toggleButton = () => {
        this.setState({
            hideContent: !this.state.hideContent
        })
    };

    render() {
        if (!(this.props.ramApi instanceof Api)) {
            return null;
        }

        const {character, loading, error, prevBtnDisabled, nextBtnDisabled, hideContent} = this.state;
        const hasData = !(loading || error);
        const errorMessage = error ? <ErrorIndicator/> : null;
        const preloader = loading ? <Preloader/> : null;
        const toggleButton = hasData ? <ToggleButton hideContent={hideContent}
                                                     toggleButton={this.toggleButton}/> : null;
        const content = hasData && !hideContent ? <CharacterContent character={character}
                                                                    prevBtnDisabled={prevBtnDisabled}
                                                                    nextBtnDisabled={nextBtnDisabled}
                                                                    prevCharacter={this.prevCharacter}
                                                                    nextCharacter={this.nextCharacter}/> : null;

        return (
            <div className="col-lg-12">
                {errorMessage}
                {preloader}
                {content}
                {toggleButton}
            </div>
        )
    }
}

const CharacterContent = ({prevCharacter, nextCharacter, prevBtnDisabled, nextBtnDisabled, character: {imgURL, name, status, species, gender}}) => {
    const prevBtnClass = prevBtnDisabled ? 'disabled' : '';
    const nextBtnClass = nextBtnDisabled ? 'disabled' : '';

    return (
        <div className="random-character col-lg-12 jumbotron">
            <div className="random-character-buttons">
                <button className={'btn btn-outline-primary ' + prevBtnClass}
                        onClick={prevCharacter}>PREV
                </button>
                <button className={'btn btn-outline-primary ' + nextBtnClass}
                        onClick={nextCharacter}>NEXT
                </button>
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
        </div>
    )
};

const ToggleButton = ({toggleButton, hideContent}) => {
    return (
        <React.Fragment>
            <div className="toggle-button"
                 onClick={toggleButton}><img src={hideContent ? show : close} alt="toggler"/></div>
        </React.Fragment>
    )
};

const mapAllEpisodessMethodToProps = (ramApi) => {
    return {
        ramApi: ramApi
    }
};

const RandomCharacter = withApi(mapAllEpisodessMethodToProps)(RandomCharacterWrapped);

export default RandomCharacter;