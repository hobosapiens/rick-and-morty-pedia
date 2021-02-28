import React from 'react';

const EpisodesInfo = (props) => {
    const {data, children} = props;
    return (
        <React.Fragment>
            <div className="col-lg-4 loaction-characters">
                EpisodeCharacters
            </div>
            <div className="item-info-text col-lg-8">
                <ul className="list-group list-group-flush">
                    { React.Children.map(children, (child) => {
                        return React.cloneElement(child, { data });
                    }) }
                </ul>
            </div>
        </React.Fragment>
    )
};

export default EpisodesInfo;