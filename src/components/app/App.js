import React, {Component} from 'react';
import Header from "../header";
import RandomCharacter from "../random-character";
import './app.css';
import CharactersPage from "../characters-page";
import Row from "../row";
import ItemInfo from "../item-info";
import Api from "../../services/api";
import {Record} from "../item-info/item-info";

export default class App extends Component {
    ramApi = new Api();

    render() {
        const {getCharacter, getLocation, getCharacterImage} = this.ramApi;

        const characterInfo = (
            <ItemInfo itemId={2}
                      getData={getCharacter}
                      getImageUrl={getCharacterImage}>
                <Record field="gender" label="Gender" />
                <Record field="eyeColor" label="Eye Color" />
            </ItemInfo>
        );

        const locationInfo = (
            <ItemInfo itemId={4}
                      getData={getLocation}
                      getImageUrl={getCharacterImage}>
                <Record field="type" label="type" />
                <Record field="dimension" label="dimension" />
            </ItemInfo>
        );

        return (
            <div className="app container">
                <Header />
                <section className="bs-docs-section row">
                    {/*<RandomCharacter />*/}
                    {/*<CharactersPage />*/}
                    <Row left={characterInfo} right={locationInfo} />
                </section>
            </div>
        );
    }
}
