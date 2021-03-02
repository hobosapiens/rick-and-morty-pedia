import React from 'react';

const CharacterInfoData = (props) => {
    const {data, image, children} = props;
    return (
        <React.Fragment>
            <div className="col-lg-4 item-info-photo-wrapper">
                <div className="jumbotron item-info-photo">
                    <img src={image} alt={data.name}/>
                </div>
            </div>
            <div className="item-info-text col-lg-8 character-info">
                <ul className="list-group list-group-flush">
                    {React.Children.map(children, (child) => {
                        return React.cloneElement(child, {data});
                    })}
                </ul>
            </div>
        </React.Fragment>
    )
};

export default CharacterInfoData;