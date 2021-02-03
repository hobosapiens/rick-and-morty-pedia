import React from 'react';
import ItemList from "../item-list";
import withData from "../hoc/with-data";
import withApi from "../hoc/with-api";

const withChildren = (Wrapped, fn) => {
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

const CharactersList = withApi(withData(withChildren(ItemList, renderName)), mapAllCharactersMethodToProps);

const LocationsList = withApi(withData(withChildren(ItemList, renderName)), mapAllLocationsMethodToProps);

const EpisodesList = withApi(withData(withChildren(ItemList, renderName)), mapAllEpisodessMethodToProps);

export {
    CharactersList,
    LocationsList,
    EpisodesList
}