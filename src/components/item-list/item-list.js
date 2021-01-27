import React from 'react';
import './item-list.css';
import Api from "../../services/api";
import withData from "../hoc";

const ItemList = (props) => {

    const {data, activeId, onItemSelected, children: renderLabel} = props;

    const renderList = (arr) => {
        return arr.map((item) => {
            const {id} = item;
            const label = renderLabel(item);

            return <li className={activeId === id ?
                'list-group-item list-group-item-action active' :
                'list-group-item list-group-item-action'}
                       onClick={() => onItemSelected(id)}
                       key={id}>{label}</li>
        })
    };

    const list = renderList(data);

    return (
        <ul className="item-list list-group">
            {list}
        </ul>
    )
};

const { getAllCharacters } = new Api();

export default withData(ItemList, getAllCharacters);