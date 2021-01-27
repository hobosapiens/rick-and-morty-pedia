import React, {Component} from 'react';
import './item-info.css';
import ErrorIndicator from "../error-indicator";
import Preloader from "../preloader";

const Record = ({item, field, label}) => {
  return (
      <li className="list-group-item name">
          <span>{label}: </span>
          <span>{item[field]}</span>
      </li>
  )
};

export {
  Record
};

export default class ItemInfo extends Component {
    state = {
        item: null,
        image: null,
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

    updateCharacter() {
        this.setState({
            loading: true
        });
        const { itemId, getData, getImageUrl } = this.props;
        if(!itemId) {
            return;
        }
        getData(itemId)
            .then((item) =>
                this.setState({
                    item,
                    image: getImageUrl(item),
                    loading: false,
                    error: false
                })
            )
            .catch(this.onError);
    };

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    };

    render() {
        const {item, image, loading, error} = this.state;
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
        const content = hasData ? <ItemInfoContent item={item} image={image} children={this.props.children} /> : null;

        return (
            <React.Fragment>
                {preloader}
                {content}
            </React.Fragment>
        )
    }
};

const ItemInfoContent = ({item: {name, status, species, gender}, item, image, children}) => {
    return (
        <div className="item-info jumbotron">
            <div className="item-info-photo col-lg-4 jumbotron">
                <img src={image} alt={name} />
            </div>
            <div className="item-info-text col-lg-8">
                <ul className="list-group list-group-flush">
                    { React.Children.map(children, (child) => {
                        return React.cloneElement(child, {item});
                    }) }
                </ul>
            </div>
        </div>
    )
}