import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "../header";
import RandomCharacter from "../random-character";
import './app.css';
import Api from "../../services/api";
import FakeApi from "../../services/fakeApi";
import ErrorBoundary from "../error-boundary";
import { ApiProvider } from './../api-context'
import { CharactersPage, LocationsPage, EpisodesPage } from "../pages";
import CharactersInfo from "../item-components/character-info";
import EpisodesInfo from "../item-components/episodes-info";

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
        return (
            <ErrorBoundary>
                <ApiProvider value={this.state.ramApi}>
                    <Router>
                        <div className="app container">
                            <Header onApiChange={this.onApiChange}/>
                            <section className="bs-docs-section row">
                                <RandomCharacter/>
                                <Route path={["/", "/characters/:id?"]} component={CharactersPage} exact />
                                <Route path="/locations" component={LocationsPage} />
                                <Route path="/episodes" component={EpisodesPage} exact />
                                <Route path="/episodes/:id"
                                       render={({match}) => {
                                           const {id} = match.params;
                                           return <EpisodesInfo selectedItem={id}/>
                                       }}/>
                            </section>
                        </div>
                    </Router>
                </ApiProvider>
            </ErrorBoundary>
        );
    }
}
