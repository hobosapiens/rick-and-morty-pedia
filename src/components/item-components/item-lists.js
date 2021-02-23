import React from 'react';
import ItemList from "../item-list";
import {
    withData,
    withApi,
    withChildren,
    compose
} from '../hoc';
import {withRouter} from "react-router-dom";
import withCustomScroll from "../hoc/with-custom-scroll";
import withPagination from "../hoc/with-pagination";

const mapAllCharactersMethodToProps = (ramApi) => {
    return {
        getData: ramApi.getAllCharacters,
        getInfo: ramApi.getAllCharactersInfo
    }
};

const mapAllLocationsMethodToProps = (ramApi) => {
    return {
        getData: ramApi.getAllLocations,
        getInfo: ramApi.getAllLocationsInfo
    }
};

const mapAllEpisodessMethodToProps = (ramApi) => {
    return {
        getData: ramApi.getAllEpisodes,
        getInfo: ramApi.getAllEpisodesInfo
    }
};

const renderName = ({name}) => <span>{name}</span>;

const CharactersList = compose(
    withApi(mapAllCharactersMethodToProps),
    withRouter,
    withPagination,
    withData,
    withChildren(renderName),
    withCustomScroll
)(ItemList);


const LocationsList = compose(
    withApi(mapAllLocationsMethodToProps),
    withRouter,
    withPagination,
    withData,
    withChildren(renderName),
    withCustomScroll
)(ItemList);

const EpisodesList = compose(
    withApi(mapAllEpisodessMethodToProps),
    withRouter,
    withPagination,
    withData,
    withChildren(renderName),
    withCustomScroll
)(ItemList);

export {
    CharactersList,
    LocationsList,
    EpisodesList
}