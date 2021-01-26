import React, { Component } from 'react';
import './item-list.css';
import Preloader from "../preloader";

export default class ItemList extends Component  {

    state = {
        itemList: null,
        activeId: null
    };

    componentDidMount() {
        const {getListData} = this.props;

        getListData()
            .then((itemList) => {
                this.setState({
                    itemList
                });
            });
    }

    componentDidUpdate(prevProps) {
        if(this.props.itemId !== prevProps.itemId){
            this.setState({
                activeId: this.props.itemId
            });
        }
    }

    renderList = (arr) => {
        return arr.map((item) => {
            const { id } = item;
            const label = this.props.renderItem(item);

            return <li className={this.state.activeId === id ?
                'list-group-item list-group-item-action active' :
                'list-group-item list-group-item-action'}
                       onClick={() => this.props.onItemSelected(id)}
                       key={id}>{label}</li>
        })
    };

    render() {
        const {itemList} = this.state;

        if(!itemList) {
            return <Preloader/>
        }

        const list = this.renderList(itemList);

        return (
            <ul className="item-list col-lg-4 list-group">
                { list }
            </ul>
        )
    }
};