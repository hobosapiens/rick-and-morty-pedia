import React from 'react';
import Api from "../../services/api";
import withData from "../hoc";
import ItemList from "../item-list";

const ramApi = new Api();

const {
    getAllCharacters,
    getAllLocations,
    getAllEpisodes
} = ramApi;

const CharacterList = withData(ItemList, getAllCharacters);

const LocationList = withData(ItemList, getAllLocations);

const EpisodesList = withData(ItemList, getAllEpisodes);

export {
    CharacterList,
    LocationList,
    EpisodesList
}