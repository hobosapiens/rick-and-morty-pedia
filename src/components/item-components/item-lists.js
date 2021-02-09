import React from 'react';
import ItemList from "../item-list";
import withData from "../hoc/with-data";
import withApi from "../hoc/with-api";

const withChildren = (fn) => (Wrapped) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
};

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

const CharactersList = withApi(mapAllCharactersMethodToProps)(
                        withData(
                            withChildren(renderName)(
                                ItemList)));

const LocationsList = withApi(mapAllLocationsMethodToProps)(
                        withData(
                            withChildren(renderName)(
                                ItemList)));

const EpisodesList = withApi(mapAllEpisodessMethodToProps)(
                        withData(
                            withChildren(renderName)(
                                ItemList)));

export {
    CharactersList,
    LocationsList,
    EpisodesList
}