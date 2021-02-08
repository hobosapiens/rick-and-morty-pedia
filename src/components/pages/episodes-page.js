import React, {Component} from 'react';
import Row from "../row";
import {EpisodesList, EpisodesInfo} from "../item-components";
import Api from "../../services/api";

export default class EpisodesPage extends Component {

    state = {
        selectedItem: null,
        ramApi: new Api()
    };

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        });
    };

    render() {
        return (
            <Row
                left={<EpisodesList onItemSelected={this.onItemSelected}/>}
                right={<EpisodesInfo selectedItem={this.state.selectedItem}/>}
            />
        )
    }
}