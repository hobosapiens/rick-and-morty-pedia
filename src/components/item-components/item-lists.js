import React from 'react';
import ItemList from "../item-list";
import {
    withData,
    withApi,
    withChildren,
    compose
} from '../hoc';
import withCustomScroll from "../hoc/with-custom-scroll";

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
    withChildren(renderName),
    withCustomScroll
)(ItemList);


const LocationsList = compose(
    withApi(mapAllLocationsMethodToProps),
    withData,
    withChildren(renderName),
    withCustomScroll
)(ItemList);

const EpisodesList = compose(
    withApi(mapAllEpisodessMethodToProps),
    withData,
    withChildren(renderName),
    withCustomScroll
)(ItemList);

export {
    CharactersList,
    LocationsList,
    EpisodesList
}