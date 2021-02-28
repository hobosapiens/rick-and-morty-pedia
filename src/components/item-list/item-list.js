import React from 'react';
import PropTypes from 'prop-types';
import './item-list.css';

const ItemList = (props) => {
    const {data, onItemSelected, match, children: renderLabel} = props;

    const renderList = (arr) => {
        return arr.map((item) => {
            const {id} = item;
            const label = renderLabel(item);
            return <li className={parseInt(match.params.id) === id ?
                'list-group-item list-group-item-action active' :
                'list-group-item list-group-item-action ts'}
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

ItemList.propTypes = {
    onItemSelected: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    children: PropTypes.func.isRequired
};

export default ItemList;