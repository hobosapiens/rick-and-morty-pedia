import React from 'react';
import Api from "../../services/api";
import ItemList from "../item-list";
import withData from "../hoc/with-data";

const ramApi = new Api();

const {
    getAllCharacters,
    getAllLocations,
    getAllEpisodes
} = ramApi;

const withChildren = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
};

const renderName = ({name}) => <span>{name}</span>;

const CharactersList = withData(withChildren(ItemList, renderName), getAllCharacters);

const LocationsList = withData(withChildren(ItemList, renderName), getAllLocations);

const EpisodesList = withData(withChildren(ItemList, renderName), getAllEpisodes);

export {
    CharactersList,
    LocationsList,
    EpisodesList
}