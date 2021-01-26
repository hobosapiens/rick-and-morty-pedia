import React, {Component} from 'react';
import './characters-page.css';
import ItemList from "../item-list";
import Api from "../../services/api";
import ItemInfo from "../item-info";
import Row from "../row";
import ErrorBoundary from "../error-boundary";

export default class CharactersPage extends Component {
    ramApi = new Api();

    state = {
        selectedItem: null
    };

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        });
    };

    render() {
        const itemList = (
            <ErrorBoundary>
                <ItemList onItemSelected={this.onItemSelected}
                          itemId={this.state.selectedItem}
                          getListData={this.ramApi.getAllCharacters}>
                    {(i) => <span>{i.name} - {i.species}</span>}
                </ItemList>
            </ErrorBoundary>
        );

        const itemInfo = (
            <ErrorBoundary>
                <ItemInfo itemId={this.state.selectedItem}/>
            </ErrorBoundary>
        );

        return (
            <Row left={itemList} right={itemInfo}/>
        )
    }
}