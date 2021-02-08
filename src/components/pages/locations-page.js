import React, {Component} from 'react';
import Row from "../row";
import {LocationsList, LocationsInfo} from "../item-components";
import Api from "../../services/api";

export default class LocationsPage extends Component {

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
                left={<LocationsList onItemSelected={this.onItemSelected}/>}
                right={<LocationsInfo selectedItem={this.state.selectedItem}/>}
            />
        )
    }
}