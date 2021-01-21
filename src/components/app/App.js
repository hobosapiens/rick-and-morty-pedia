import React, {Component} from 'react';
import Header from "../header";
import RandomCharacter from "../random-character";
import ItemList from "../item-list";
import CharacterInfo from "../character-info";
import Preloader from "../preloader";
import './app.css'

export default class App extends Component {
    render() {
        return (
            <div className="app container">
                <Header />
                <section className="bs-docs-section row">
                    <Preloader />
                    <RandomCharacter />
                    <ItemList />
                    <CharacterInfo />
                </section>
            </div>
        );
    }
}
