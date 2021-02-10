import React from "react";
import PropTypes from 'prop-types';

const Row = ({left, right}) => {
    return (
        <React.Fragment>
            <div className="col-lg-4">
                {left}
            </div>
            <div className="col-lg-7 offset-1">
                {right}
            </div>
        </React.Fragment>
    )
};

Row.propTypes = {
    left: PropTypes.node,
    right: PropTypes.node
};

export default Row;