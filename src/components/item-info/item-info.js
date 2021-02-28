import React from 'react';
import './item-info.css';
import ErrorIndicator from "../error-indicator";
import Preloader from "../preloader";
import CharacterInfoData from "./character-info";
import LocationsInfoData from "./locations-info";
import EpisodesInfoData from "./episodes-info";

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
                    'character': <CharacterInfoData data={data} image={image} children={children} />,
                    'location': <LocationsInfoData data={data} children={children}
                                               residents={data.residents} getImageUrl={getImageUrl} />,
                    'episode': <EpisodesInfoData data={data} children={children}
                                             characters={data.characters} getImageUrl={getImageUrl} />
                }[type]
            }
        </div>
    )
};

export default ItemInfo;