import React from 'react';
import {EpisodesList} from "../item-components";
import {withRouter} from "react-router-dom";


const EpisodesPage = ({ history }) => {
    return (
        <EpisodesList onItemSelected={(id) => {
            history.push(`${id}`);
        }}/>
    )
};

export default withRouter(EpisodesPage);