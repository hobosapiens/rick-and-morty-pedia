import React from "react";

const Record = ({data, field, label}) => {
    return (
        <li className="list-group-item name">
            <span>{label}: </span>
            <span>{data[field]}</span>
        </li>
    )
};

export default Record;