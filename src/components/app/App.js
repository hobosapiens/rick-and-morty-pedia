import React, {Component} from 'react';
import Header from "../header";
import RandomCharacter from "../random-character";
import './app.css';
import CharaterPage from "../character-page";

export default class App extends Component {

    render() {
        return (
            <div className="app container">
                <Header />
                <section className="bs-docs-section row">
                    <RandomCharacter />
                    <CharaterPage />
                </section>
            </div>
        );
    }
}
