import React, {Component} from 'react';
import Header from "../header";
import RandomCharacter from "../random-character";
import './app.css';
import Api from "../../services/api";
import ItemList from "../item-list";
import CharacterInfo from "../character-info";

export default class App extends Component {

    ramApi = new Api();

    state = {
        selectedItem: null,
        hasError: false
    };

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        });
    };

    render() {
        return (
            <div className="app container">
                <Header />
                <section className="bs-docs-section row">
                    <RandomCharacter />
                    <ItemList onItemSelected={this.onItemSelected}
                              itemId={this.state.selectedItem}
                              getListData={this.ramApi.getAllCharacters}/>
                    <CharacterInfo characterId={this.state.selectedItem} />
                    <ItemList onItemSelected={this.onItemSelected}
                              itemId={this.state.selectedItem}
                              getListData={this.ramApi.getAllCharacters}/>
                    <CharacterInfo characterId={this.state.selectedItem} />
                    <ItemList onItemSelected={this.onItemSelected}
                              itemId={this.state.selectedItem}
                              getListData={this.ramApi.getAllCharacters}/>
                    <CharacterInfo characterId={this.state.selectedItem} />
                </section>
            </div>
        );
    }
}
