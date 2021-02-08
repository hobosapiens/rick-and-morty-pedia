import React, {Component} from 'react';
import Header from "../header";
import RandomCharacter from "../random-character";
import './app.css';
import Api from "../../services/api";
import FakeApi from "../../services/fakeApi";
import ErrorBoundary from "../error-boundary";
import { ApiProvider } from './../api-context'
import { CharactersPage, LocationsPage, EpisodesPage } from "../pages";

export default class App extends Component {

    state = {
        ramApi: new Api()
    };

    onApiChange = () => {
        this.setState(({ramApi}) => {
            const mainApi = ramApi instanceof Api ? FakeApi : Api;
            return {
                ramApi: new mainApi()
            }
        })
    };

    render() {
        const {selectedItem} = this.state;

        return (
            <ApiProvider value={this.state.ramApi}>
                <ErrorBoundary>
                    <div className="app container">
                        <Header onApiChange={this.onApiChange} />
                        <section className="bs-docs-section row">
                            <RandomCharacter />
                            <CharactersPage selectedItem={selectedItem} onItemSelected={this.onItemSelected} />
                            <LocationsPage selectedItem={selectedItem} onItemSelected={this.onItemSelected} />
                            <EpisodesPage selectedItem={selectedItem} onItemSelected={this.onItemSelected} />
                        </section>
                    </div>
                </ErrorBoundary>
            </ApiProvider>
        );
    }
}
