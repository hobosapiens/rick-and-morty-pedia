import React from 'react';
import ItemInfo from "../item-info";
import withInfo from "../hoc/with-info";
import Record from "../record";
import withApi from "../hoc/with-api";
import compose from "../hoc/compose";

const mapLocationMethodToProps = (ramApi) => {
    return {
        getData: ramApi.getLocation,
        getImageUrl: ramApi.getCharacterImage
    }
};

const withLocationChildren = (Wrapped) => {
    return (props) => {
        return (
            <Wrapped type={'location'} {...props} >
                <Record label="Name" field="name" />
                <Record label="Type" field="type" />
                <Record label="Dimension" field="dimension" />
            </Wrapped>
        )
    }
};

const LocationsInfo = compose(
    withApi(mapLocationMethodToProps),
    withInfo,
    withLocationChildren
    )(ItemInfo);

export default LocationsInfo;
