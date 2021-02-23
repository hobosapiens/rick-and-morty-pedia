import React from 'react';
import {EpisodesList} from "../item-components";
import {withRouter} from "react-router-dom";


const EpisodesPage = ({ history }) => {
    return (
        <div className="episodes-list">
            <EpisodesList onItemSelected={(id) => {
                history.push(`${id}`);
            }}/>
        </div>
    )
};

export default withRouter(EpisodesPage);