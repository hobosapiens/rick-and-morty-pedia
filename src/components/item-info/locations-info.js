import React from 'react';
import {Link} from "react-router-dom";

const LocationsInfo = (props) => {
    const {data, children, getImageUrl, residents} = props;
    const residentsArr = residents.map(r => {
        const id = r.match(/\d+$/g);
        return <li key={id}><Link to={`/characters/${id}`}><img src={getImageUrl(id)} alt="character"/></Link></li>
    });

    return (
        <React.Fragment>
            <div className="item-info-text col-lg-12 location-description">
                <ul className="list-group list-group-flush">
                    {React.Children.map(children, (child) => {
                        return React.cloneElement(child, {data});
                    })}
                </ul>
            </div>
            <div className="col-lg-12 residents">
                {residentsArr.length > 0 ?
                    <Residents residentsArr={residentsArr}/> :
                    <span>No residents</span>
                }
            </div>
        </React.Fragment>
    )
};

const Residents = ({residentsArr}) => {
    return (
        <React.Fragment>
            <div>Residents:</div>
            <ul>
                {residentsArr}
            </ul>
        </React.Fragment>
    )
};


export default LocationsInfo;