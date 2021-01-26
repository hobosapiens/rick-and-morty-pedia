import React, {Component} from 'react';
import './characters-page.css';
import ItemList from "../item-list";
import Api from "../../services/api";
import ErrorIndicator from "../error-indicator";
import CharacterInfo from "../character-info";
import Row from "../row";

export default class CharactersPage extends Component {
    ramApi = new Api();

    state = {
        selectedItem: null,
        hasError: false
    };

    componentDidCatch() {
        this.setState({
            hasError: true
        })
    }

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        });
    };

    render() {

        if(this.state.hasError){
            return <ErrorIndicator />
        }

        const itemList = (
            <ItemList onItemSelected={this.onItemSelected}
                      itemId={this.state.selectedItem}
                      getListData={this.ramApi.getAllCharacters}
                      renderItem={({name, species}) => <span>{name} - {species}</span>}/>
        );

        const charcterInfo = (
            <CharacterInfo characterId={this.state.selectedItem}/>
        );

        return (
            <Row left={itemList} right={charcterInfo} />
        )
    }
}