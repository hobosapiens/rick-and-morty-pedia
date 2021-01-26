import React from "react";

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

export default Row;