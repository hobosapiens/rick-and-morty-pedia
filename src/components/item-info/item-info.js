import React from 'react';
import './item-info.css';
import ErrorIndicator from "../error-indicator";
import Preloader from "../preloader";
import CharacterInfo from "./character-info";
import LocationsInfo from "./locations-info";
import EpisodesInfo from "./episodes-info";

const ItemInfo = (props) => {
        const {data, image, loading, error, selectedItem, children, type, getImageUrl} = props;
        const itemChoose = !error ? <span className="choose-item">CHOOSE ONE</span> : null;
        const errorMessage = error ? <ErrorIndicator/> : null;

        if (!selectedItem) {
            return (
                <React.Fragment>
                    {itemChoose}
                    {errorMessage}
                </React.Fragment>
            )
        }

        const hasData = !(loading || error);
        const preloader = loading ? <Preloader/> : null;
        const content = hasData ? <ItemInfoContent data={data} image={image} children={children}
                                                   type={type} getImageUrl={getImageUrl} /> : null;

        return (
            <React.Fragment>
                {preloader}
                {content}
            </React.Fragment>
        )
};

const ItemInfoContent = ({data, image, children, type, getImageUrl}) => {
    return (
        <div className="item-info jumbotron">
            {
                {
                    'character': <CharacterInfo data={data} image={image} children={children} />,
                    'location': <LocationsInfo data={data} children={children}
                                               residents={data.residents} getImageUrl={getImageUrl} />,
                    'episode': <EpisodesInfo data={data} children={children} />
                }[type]
            }
        </div>
    )
};

export default ItemInfo;