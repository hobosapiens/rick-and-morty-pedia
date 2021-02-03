import React, {Component} from 'react';
import Preloader from "../preloader";

const withInfo = (View, getData, getImageUrl) => {
    return class extends Component {
        state = {
            data: null,
            image: null,
            loading: true,
            error: false
        };

        componentDidMount() {
            this.updateCharacter();
        }

        componentDidUpdate(prevProps) {
            if(this.props.selectedItem !== prevProps.selectedItem){
                this.updateCharacter();
            }
        }

        updateCharacter() {
            this.setState({
                loading: true
            });
            if(!this.props.selectedItem) {
                return;
            }
            getData(this.props.selectedItem)
                .then((data) =>
                    this.setState({
                        data,
                        image: getImageUrl(data),
                        loading: false,
                        error: false
                    })
                )
                .catch(this.onError);
        };

        onError = (err) => {
            this.setState({
                error: true,
                loading: false
            })
        };

        render() {

            const {data, loading, error, image} = this.state;

            return (
                <React.Fragment>
                    {/*{preloader}*/}
                    <View {...this.props} data={data} loading={loading} error={error} image={image} />
                </React.Fragment>
            )
        }
    }
};

export default withInfo;