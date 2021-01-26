import React, {Component} from 'react';
import './item-info.css';
import Api from "../../services/api";
import ErrorIndicator from "../error-indicator";
import Preloader from "../preloader";

export default class ItemInfo extends Component {
    ramApi = new Api();

    state = {
        item: null,
       itemId: null,
        loading: true,
        error: false
    };

    componentDidMount() {
        this.updateCharacter();
    }

    componentDidUpdate(prevProps) {
        if(this.props.itemId !== prevProps.itemId){
            this.updateCharacter();
        }
    }

    updateCharacter = () => {
        const { itemId } = this.props;
        if(!itemId) {
            return;
        }
        this.setState({
            loading: true
        });
        this.ramApi
            .getCharacter(itemId)
            .then(this.onCharacterLoaded)
            .catch(this.onError);
    };

    onCharacterLoaded = (item) => {
        this.setState({
            item,
            loading: false,
            error: false
        })
    };

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    };

    render() {
        const {item, loading, error} = this.state;
        const itemChoose = !error ? <span className="choose-item">CHOOSE A CHARACTER</span> : null;
        const errorMessage = error ? <ErrorIndicator/> : null;

        if (!this.state.item) {

            return (
                <React.Fragment>
                    {itemChoose}
                    {errorMessage}
                </React.Fragment>
            )

        }

        const hasData = !(loading || error);
        const preloader = loading ? <Preloader/> : null;
        const content = hasData ? <ItemInfoContent item={item} /> : null;

        return (
            <React.Fragment>
                {preloader}
                {content}
            </React.Fragment>
        )
    }
};

const ItemInfoContent = ({item: {imgURL, name, status, species, gender}}) => {
    return (
        <div className="item-info jumbotron">
            <div className="item-info-photo col-lg-4 jumbotron">
                <img src={imgURL} alt={name} />
            </div>
            <div className="item-info-text col-lg-8">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item name">{name}</li>
                    <li className="list-group-item status">{status}</li>
                    <li className="list-group-item species">{species}</li>
                    <li className="list-group-item gender">{gender}</li>
                </ul>
            </div>
        </div>
    )
}