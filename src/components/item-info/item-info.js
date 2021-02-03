import React from 'react';
import './item-info.css';
import ErrorIndicator from "../error-indicator";
import Preloader from "../preloader";

const ItemInfo = (props) => {

        const {data, image, loading, error, selectedItem} = props;

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
        const content = hasData ? <ItemInfoContent data={data} image={image} children={props.children} /> : null;

        return (
            <React.Fragment>
                {preloader}
                {content}
            </React.Fragment>
        )
};

const ItemInfoContent = ({data, image, children}) => {
    return (
        <div className="item-info jumbotron">
            <div className="item-info-photo col-lg-4 jumbotron">
                <img src={image} alt={data.name} />
            </div>
            <div className="item-info-text col-lg-8">
                <ul className="list-group list-group-flush">
                    { React.Children.map(children, (child) => {
                        return React.cloneElement(child, { data });
                    }) }
                </ul>
            </div>
        </div>
    )
};

export default ItemInfo;