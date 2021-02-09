import React from 'react';
import ItemList from "../item-list";
import {
    withData,
    withApi,
    withChildren,
    compose
} from '../hoc';

const mapAllCharactersMethodToProps = (ramApi) => {
    return {
        getData: ramApi.getAllCharacters
    }
};

const mapAllLocationsMethodToProps = (ramApi) => {
    return {
        getData: ramApi.getAllLocations
    }
};

const mapAllEpisodessMethodToProps = (ramApi) => {
    return {
        getData: ramApi.getAllEpisodes
    }
};

const renderName = ({name}) => <span>{name}</span>;

const CharactersList = compose(
    withApi(mapAllCharactersMethodToProps),
    withData,
    withChildren(renderName)
)(ItemList);


const LocationsList = compose(
    withApi(mapAllLocationsMethodToProps),
    withData,
    withChildren(renderName)
)(ItemList);

const EpisodesList = compose(
    withApi(mapAllEpisodessMethodToProps),
    withData,
    withChildren(renderName)
)(ItemList);

export {
    CharactersList,
    LocationsList,
    EpisodesList
}