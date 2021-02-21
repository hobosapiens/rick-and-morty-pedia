import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
        borderRadius: 6,
        backgroundColor: '#E89AC7'
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
};

const CustomScrollbars = props => (
    <Scrollbars
        renderThumbHorizontal={renderThumb}
        renderThumbVertical={renderThumb}
        {...props}
    />
);

const scrollStyles = {
    width: 294,
    height: 500
};

const withCustomScroll =  (Wrapped) => {
    return (props) => {
        return (
            <div className="list-wrapper" style={scrollStyles}>
                <CustomScrollbars >
                    <Wrapped {...props} />
                </CustomScrollbars>
            </div>
        )
    }
};

export default withCustomScroll;