import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from "../header";
import './app.css';
import Api from "../../services/api";
import FakeApi from "../../services/fakeApi";
import ErrorBoundary from "../error-boundary";
import { ApiProvider } from './../api-context'
import { CharactersPage, LocationsPage, EpisodesPage, Homepage } from "../pages";
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
                                <Switch>
                                    <Route exact path="/" component={Homepage} />
                                    <Route path="/characters/:id?" component={CharactersPage} exact />
                                    <Route path="/locations/:id?" component={LocationsPage} exact />
                                    <Route path="/episodes/:id?" component={EpisodesPage} exact />
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
