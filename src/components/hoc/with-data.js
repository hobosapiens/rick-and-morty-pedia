import React, {Component} from 'react';

const withData = (View, getData) => {
    return class extends Component {

        state = {
          data: null
        };

        render() {
            return <Wrapped {...this.props} />
        }
    }
};

const MyWrappedComponent = withData(InnerComponent);