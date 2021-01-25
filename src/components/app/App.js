import React, {Component} from 'react';
import Header from "../header";
import RandomCharacter from "../random-character";
import ItemList from "../item-list";
import CharacterInfo from "../character-info";
import './app.css';

export default class App extends Component {

    state = {
        selectedCharacter: null
    };

    onCharacterSelected = (id) => {
        this.setState({
            selectedCharacter: id
        });
    };

    render() {
        return (
            <div className="app container">
                <Header />
                <section className="bs-docs-section row">
                    <RandomCharacter />
                    <ItemList onCharacterSelected={this.onCharacterSelected}
                              characterId={this.state.selectedCharacter}/>
                    <CharacterInfo characterId={this.state.selectedCharacter} />
                </section>
            </div>
        );
    }
}
