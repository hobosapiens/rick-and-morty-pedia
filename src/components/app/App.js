import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Header from "../header";
import RandomCharacter from "../random-character";
import './app.css';
import Api from "../../services/api";
import FakeApi from "../../services/fakeApi";
import ErrorBoundary from "../error-boundary";
import { ApiProvider } from './../api-context'
import { CharactersPage, LocationsPage, EpisodesPage } from "../pages";
import EpisodesInfo from "../item-components/episodes-info";
import { LoginPage, AdminPage } from "../pages";
import notFound from './../../images/404.png'

export default class App extends Component {

    state = {
        ramApi: new Api(),
        isLoggedIn: false
    };

    logIn = () => {
        this.setState({
            isLoggedIn: true
        })
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
        const {ramApi,isLoggedIn} = this.state;

        return (
            <ErrorBoundary>
                <ApiProvider value={ramApi}>
                    <Router>
                        <div className="app container">
                            <Header/>
                            <section className="bs-docs-section row">
                                <RandomCharacter/>
                                <Switch>
                                    <Route exact path="/">
                                        <Redirect to="/characters/" />
                                    </Route>
                                    <Route path="/characters/:id?" component={CharactersPage} exact />
                                    <Route path="/locations" component={LocationsPage} />
                                    <Route path="/episodes" component={EpisodesPage} exact />
                                    <Route path="/episodes/:id"
                                           render={({match}) => {
                                               const {id} = match.params;
                                               return <EpisodesInfo selectedItem={id}/>
                                           }}/>
                                    <Route path="/login" render={() => (
                                        <LoginPage
                                            isLoggedIn={isLoggedIn}
                                            logIn={this.logIn}
                                        />
                                    )} />
                                    <Route path="/admin" render={() => (
                                        <AdminPage isLoggedIn={isLoggedIn} onApiChange={this.onApiChange} apiType={ramApi.constructor.name} />
                                    )}  />
                                    <Route render={() => (
                                        <img src={notFound} alt="not found" style={{ margin: "auto"}} />
                                    )} />
                                </Switch>
                            </section>
                        </div>
                    </Router>
                </ApiProvider>
            </ErrorBoundary>
        );
    }
}
