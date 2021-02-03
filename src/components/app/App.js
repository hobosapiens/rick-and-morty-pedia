import React, {Component} from 'react';
import Header from "../header";
import RandomCharacter from "../random-character";
import './app.css';
import CharactersPage from "../characters-page";
import Row from "../row";
import ItemInfo from "../item-info";
import Api from "../../services/api";
import ErrorBoundary from "../error-boundary";
import ItemList from "../item-list";
import { ApiProvider } from './../api-context'
import {
    CharactersList,
    EpisodesList,
    LocationsList,
    CharactersInfo,
    LocationsInfo,
    EpisodesInfo
} from "../item-components";
import Record from "../record";

export default class App extends Component {
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
        const {selectedItem} = this.state;
        const {getCharacter, getLocation, getCharacterImage} = this.ramApi;

        // const characterInfo = (
        //     <ItemInfo itemId={selectedItem}
        //               getData={getCharacter}
        //               getImageUrl={getCharacterImage}>
        //         <Record label="Gender" field="gender" />
        //         <Record label="Status" field="status" />
        //         <Record label="Species" field="species" />
        //         <Record label="Gender" field="gender" />
        //     </ItemInfo>
        // );
        //
        // const locationInfo = (
        //     <ItemInfo itemId={selectedItem}
        //               getData={getLocation}
        //               getImageUrl={getCharacterImage}>
        //         <Record label="type" field="type" />
        //         <Record label="dimension" field="dimension" />
        //     </ItemInfo>
        // );
        //
        // const characterList = (
        //     <ErrorBoundary>
        //         <ItemList onItemSelected={this.onItemSelected}
        //                   itemId={this.state.selectedItem}
        //                   getData={this.ramApi.getAllCharacters}>
        //             {(i) => <span>{i.name} - {i.species}</span>}
        //         </ItemList>
        //     </ErrorBoundary>
        // );
        //
        // const locationList = (
        //     <ErrorBoundary>
        //         <ItemList onItemSelected={this.onItemSelected}
        //                   itemId={this.state.selectedItem}
        //                   getData={this.ramApi.getAllLocations}>
        //             {(i) => <span>{i.name} - {i.species}</span>}
        //         </ItemList>
        //     </ErrorBoundary>
        // );

        return (
            <ApiProvider value={this.ramApi}>
                <ErrorBoundary>
                    <div className="app container">
                        <Header/>
                        <section className="bs-docs-section row">
                            {/*<RandomCharacter />*/}
                            {/*<CharactersPage />*/}
                            {/*<Row left={characterList} right={characterInfo} />*/}
                            {/*<Row left={locationList} right={locationInfo} />*/}

                            <CharactersList onItemSelected={this.onItemSelected}/>
                            <CharactersInfo selectedItem={selectedItem}/>

                            <LocationsList onItemSelected={this.onItemSelected} />
                            <LocationsInfo selectedItem={selectedItem} />

                            <EpisodesList onItemSelected={this.onItemSelected} />
                            <EpisodesInfo selectedItem={selectedItem} />
                        </section>
                    </div>
                </ErrorBoundary>
            </ApiProvider>
        );
    }
}
