import React, {Component} from 'react';
import Preloader from "../preloader";

const withData = (View) => {
    return class extends Component {
        state = {
            data: null,
            activeId: null
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
            this.props.getData()
                .then((data) => {
                    this.setState({
                        data
                    });
                });
        }

        render() {
            const {data} = this.state;

            if(!data) {
                return <Preloader/>
            }

            return <View {...this.props} data={data} />
        }
    }
};

export default withData;