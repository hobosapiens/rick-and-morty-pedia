import React, {Component} from 'react';
import Row from "../row";
import {CharactersInfo, CharactersList} from "../item-components";
import Api from "../../services/api";

export default class CharactersPage extends Component {

    state = {
        selectedItem: null,
        ramApi: new Api()
    };

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        });
    };

    render(){
        return (
            <Row
                left={<CharactersList onItemSelected={this.onItemSelected}/>}
                right={<CharactersInfo selectedItem={this.state.selectedItem}/>}
            />
        )
    }
}