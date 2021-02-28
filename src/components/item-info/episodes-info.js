import React from 'react';
import {Link} from "react-router-dom";

const EpisodesInfo = (props) => {
    const {data, children, characters, getImageUrl} = props;
    const charactersArr = characters.map(c => {
        const id = c.match(/\d+$/g);
        return <li key={id}><Link to={`/characters/${id}`}><img src={getImageUrl(id)} alt="character"/></Link></li>
    });

    return (
        <React.Fragment>
            <div className="item-info-text col-lg-12 episode-description">
                <ul className="list-group list-group-flush">
                    { React.Children.map(children, (child) => {
                        return React.cloneElement(child, { data });
                    }) }
                </ul>
            </div>
            <div className="col-lg-12 episode-characters">
                {charactersArr.length > 0 ?
                    <Characters charactersArr={charactersArr} /> :
                    <span>No characters</span>
                }
            </div>
        </React.Fragment>
    )
};

const Characters = ({charactersArr}) => {
    return (
        <React.Fragment>
            <div className="episode-title">Characters:</div>
            <ul>
                {charactersArr}
            </ul>
        </React.Fragment>
    )
};

export default EpisodesInfo;