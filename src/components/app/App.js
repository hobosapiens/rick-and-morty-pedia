import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Header from "../header";
import './app.css';
import Api from "../../services/api";
import FakeApi from "../../services/fakeApi";
import ErrorBoundary from "../error-boundary";
import {ApiProvider} from './../api-context'
import {AdminPage, CharactersPage, EpisodesPage, Homepage, LocationsPage, LoginPage} from "../pages";
import notFound from './../../images/404.png'

export default class App extends Component {

    state = {
        ramApi: new Api(),
        realApi: true,
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
                ramApi: new mainApi(),
                realApi: !this.state.realApi
            }
        })
    };

    render() {
        const {ramApi, realApi, isLoggedIn} = this.state;

        return (
            <ErrorBoundary>
                <ApiProvider value={ramApi}>
                    <Router basename={process.env.PUBLIC_URL}>
                        <div className="app container">
                            <Header/>
                            <section className="bs-docs-section row">
                                <Switch>
                                    <Route exact path="/" component={Homepage}/>
                                    <Route path="/characters/:id?" component={CharactersPage} exact/>
                                    <Route path="/locations/:id?" component={LocationsPage} exact/>
                                    <Route path="/episodes/:id?" component={EpisodesPage} exact/>
                                    <Route path="/login" render={() => (
                                        <LoginPage
                                            isLoggedIn={isLoggedIn}
                                            logIn={this.logIn}
                                        />
                                    )}/>
                                    <Route path="/admin" render={() => (
                                        <AdminPage isLoggedIn={isLoggedIn} onApiChange={this.onApiChange} realApi={realApi} />
                                    )}/>
                                    <Route render={() => (
                                        <img src={notFound} alt="not found" style={{margin: "auto"}}/>
                                    )}/>
                                </Switch>
                            </section>
                        </div>
                    </Router>
                </ApiProvider>
            </ErrorBoundary>
        );
    }
}
