import React from 'react';
import ItemInfo from "../item-info";
import withInfo from "../hoc/with-info";
import Record from "../record";
import withApi from "../hoc/with-api";

const mapCharacterMethodToProps = (ramApi) => {
    return {
        getData: ramApi.getCharacter,
        getImageUrl: ramApi.getCharacterImage
    }
};

const withCharacterChildren = (Wrapped) => {
    return (props) => {
        return (

            <Wrapped {...props}>
                <Record label="Name" field="name"/>
                <Record label="Status" field="status"/>
                <Record label="Species" field="species"/>
                <Record label="Gender" field="gender"/>
            </Wrapped>

        )
    }
};

const CharactersInfo = withApi(mapCharacterMethodToProps)(withInfo(withCharacterChildren(ItemInfo)));

export default CharactersInfo;