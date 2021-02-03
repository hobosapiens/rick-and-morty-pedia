import React from 'react';
import Api from "../../services/api";
import ItemInfo from "../item-info";
import withInfo from "../hoc/with-info";
import ItemList from "../item-list";
import Record from "../record";

const ramApi = new Api();

const {
    getCharacter,
    getLocation,
    getEpisode,
    getCharacterImage
} = ramApi;

const withCharacterChildren = (Wrapped) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                <Record label="Name" field="name" />
                <Record label="Status" field="status" />
                <Record label="Species" field="species" />
                <Record label="Gender" field="gender" />
            </Wrapped>
        )
    }
};

const withLocationChildren = (Wrapped) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                <Record label="Name" field="name" />
                <Record label="Type" field="type" />
                <Record label="Dimension" field="dimension" />
            </Wrapped>
        )
    }
};

const withEpisodeChildren = (Wrapped) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                <Record label="Name" field="name" />
                <Record label="Date" field="air_date" />
                <Record label="Episode" field="episode" />
            </Wrapped>
        )
    }
};

const CharactersInfo = withInfo(withCharacterChildren(ItemInfo), getCharacter, getCharacterImage);

const LocationsInfo = withInfo(withLocationChildren(ItemInfo), getLocation, getCharacterImage);

const EpisodesInfo = withInfo(withEpisodeChildren(ItemInfo), getEpisode, getCharacterImage);

export {
    CharactersInfo,
    LocationsInfo,
    EpisodesInfo
}