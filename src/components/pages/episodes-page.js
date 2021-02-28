import React from 'react';
import {withRouter} from "react-router-dom";
import Row from "../row";
import {EpisodesList, EpisodesInfo} from "../item-components";

const EpisodesPage = ({ history, match }) => {
    return (
        <Row
            left={
                <EpisodesList onItemSelected={(id) => {
                    history.push(`${id}`);
                }}/>
            }
            right={
                <EpisodesInfo selectedItem={match.params.id} />
            }
        />
    )
};

export default withRouter(EpisodesPage);