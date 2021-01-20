import React, { Component } from 'react';
import './item-list.css';

export default class ItemList extends Component  {
    render() {
        return (
            <div className="item-list col-lg-4 list-group">
                <a href="#" className="list-group-item list-group-item-action active">Cras justo odio</a>
                <a href="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
                <a href="#" className="list-group-item list-group-item-action">Morbi leo risus</a>
            </div>
        )
    }
};