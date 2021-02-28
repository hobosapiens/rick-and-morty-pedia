import React from 'react';
import Record from "../record";
import withApi from "../hoc/with-api";
import withInfo from "../hoc/with-info";
import ItemInfo from "../item-info";
import compose from "../hoc/compose";

const mapEpisodeMethodToProps = (ramApi) => {
    return {
        getData: ramApi.getEpisode,
        getImageUrl: ramApi.getCharacterImage
    }
};

const withEpisodeChildren = (Wrapped) => {
    return (props) => {
        return (
            <Wrapped type={'episode'} {...props}>
                <Record label="Name" field="name" />
                <Record label="Date" field="air_date" />
                <Record label="Episode" field="episode" />
            </Wrapped>
        )
    }
};

const EpisodesInfo = compose(
    withApi(mapEpisodeMethodToProps),
    withInfo,
    withEpisodeChildren
)(ItemInfo);

export default EpisodesInfo;