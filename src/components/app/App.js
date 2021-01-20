import React, {Component} from 'react';
import Api from "./../../services/api";
import Header from "../header";
import RandomCharacter from "../random-character";
import ItemList from "../item-list";
import CharacterInfo from "../character-info";
import './app.css'

const RAMApi = new Api();

RAMApi.getEpisode(3).then((ep) => {

    console.log(ep)

});

export default class App extends Component {
    render() {
        return (
            <div className="app container">
                <Header />
                <section className="bs-docs-section row">
                    <RandomCharacter />
                    <ItemList />
                    <CharacterInfo />
                </section>
            </div>
        );
    }
}
