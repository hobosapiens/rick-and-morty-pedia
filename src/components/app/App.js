import React, {Component} from 'react';
import Header from "../header";
import RandomCharacter from "../random-character";
import './app.css';
import CharactersPage from "../characters-page";

export default class App extends Component {

    render() {
        return (
            <div className="app container">
                <Header />
                <section className="bs-docs-section row">
                    <RandomCharacter />
                    <CharactersPage />
                </section>
            </div>
        );
    }
}
