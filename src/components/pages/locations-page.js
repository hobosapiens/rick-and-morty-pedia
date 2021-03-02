import React from 'react';
import Row from "../row";
import {LocationsInfo, LocationsList} from "../item-components";

const LocationPage = ({history, match}) => {

    return (
        <Row
            left={
                <LocationsList onItemSelected={(id) => {
                    history.push(`${id}`);
                }}/>
            }
            right={
                <LocationsInfo selectedItem={match.params.id}/>
            }
        />
    )
};

export default LocationPage;