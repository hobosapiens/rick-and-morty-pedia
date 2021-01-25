import React, { Component } from 'react';
import './item-list.css';
import Api from "../../services/api";
import Preloader from "../preloader";

export default class ItemList extends Component  {

    ramApi = new Api();

    state = {
        characterList: null,
        activeId: null
    };

    componentDidMount() {
        this.ramApi
            .getAllCharacters()
            .then((characterList) => {
                this.setState({
                    characterList
                });
            });
    }

    componentDidUpdate(prevProps) {
        if(this.props.characterId !== prevProps.characterId){
            this.setState({
                activeId: this.props.characterId
            });
        }
    }

    renderList = (characters) => {
        return characters.map(({name, id}) => {
            return <li className={this.state.activeId === id ?
                'list-group-item list-group-item-action active' :
                'list-group-item list-group-item-action'}
                       onClick={() => this.props.onCharacterSelected(id)}
                       key={id}>{name}</li>
        })
    };

    render() {
        const {characterList} = this.state;

        if(!characterList) {
            return <Preloader/>
        }

        const list = this.renderList(characterList);

        return (
            <ul className="item-list col-lg-4 list-group">
                { list }
            </ul>
        )
    }
};