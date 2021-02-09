import React from 'react';
import {ApiConsumer} from "../api-context";

const withApi = (mapMethodsToProps) => (Wrapped) => {

    return (props) => {
        return (
            <ApiConsumer>
                {
                    (ramApi) => {

                        const apiProps = mapMethodsToProps(ramApi);

                        return (
                            <Wrapped {...props} {...apiProps} />
                        )
                    }
                }
            </ApiConsumer>
        )
    }

};

export default withApi;