import Record from "../record";
import withApi from "../hoc/with-api";
import withInfo from "../hoc/with-info";
import ItemInfo from "../item-info";

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

const EpisodesInfo = withApi(mapEpisodeMethodToProps)(withInfo(withEpisodeChildren(ItemInfo)));

export default EpisodesInfo;