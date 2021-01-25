import React, {Component} from 'react';
import ItemList from "../item-list";
import CharacterInfo from "../character-info";
import ErrorIndicator from "../error-indicator";

export default class CharaterPage extends Component  {

    state = {
        selectedCharacter: null,
        hasError: false
    };

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    onCharacterSelected = (id) => {
        this.setState({
            selectedCharacter: id
        });
    };

    render() {
        if(this.state.hasError){
            return <ErrorIndicator />
        }

        return (
            <React.Fragment>
                <ItemList onCharacterSelected={this.onCharacterSelected}
                          characterId={this.state.selectedCharacter}/>
                <CharacterInfo characterId={this.state.selectedCharacter} />
            </React.Fragment>
        )
    }
};