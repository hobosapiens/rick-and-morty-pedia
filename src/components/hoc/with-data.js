import React, {Component} from 'react';
import Preloader from "../preloader";
import ErrorIndicator from "../error-indicator";

const withData = (View) => {
    return class extends Component {
        state = {
            data: null,
            activeId: null,
            loading: true,
            error: false
        };

        componentDidMount() {
            this.update();
        }

        componentDidUpdate(prevProps) {
            if(this.props.itemId !== prevProps.itemId){
                this.setState({
                    activeId: this.props.itemId
                });
            }
            if(this.props.getData !== prevProps.getData){
                this.update();
            }
        }

        update() {
            this.setState({
               loading: true
            });
            this.props.getData()
                .then((data) => {
                    this.setState({
                        data,
                        loading: false
                    });
                })
                .catch(this.onError);
        }

        onError = (err) => {
            this.setState({
                error: true,
                loading: false
            })
        };

        render() {
            const {data, loading, error} = this.state;



            if( loading || !data ) {
                return <Preloader/>
            }

            if(error) {
                return <ErrorIndicator />
            }

            return <View data={data} {...this.props} />
        }
    }
};

export default withData;