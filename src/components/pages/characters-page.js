import React from 'react';
import {CharactersList, CharactersInfo} from "../item-components";
import {withRouter} from "react-router-dom";
import Row from "../row";

const CharactersPage = ({ history, match }) => {
    return (
        <Row
            left={
                <CharactersList onItemSelected={(id) => {
                    history.push(`${id}`);
                }}/>
            }
            right={
                <CharactersInfo selectedItem={match.params.id}/>
            }
        />
    )
};

export default withRouter(CharactersPage);