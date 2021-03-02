import React, {Component} from 'react';
import Preloader from "../preloader";
import ErrorIndicator from "../error-indicator";

const withData = (View) => {
    return class extends Component {
        static defaultProps = {
            page: 1
        };

        state = {
            data: null,
            loading: true,
            error: false
        };

        componentDidMount() {
            this.update();
        }

        componentDidUpdate(prevProps) {
            if (this.props.getData !== prevProps.getData ||
                this.props.page !== prevProps.page ||
                this.props.searchValue !== prevProps.searchValue) {
                this.update();
            }
        }

        update() {
            this.setState({
                loading: true
            });
            this.props.getData(this.props.page + `&name=${this.props.searchValue}`)
                .then((data) => {
                    this.setState({
                        data,
                        loading: false,
                        error: false
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

            if (loading || !data) {
                return <Preloader/>
            }

            if (error) {
                return <ErrorIndicator/>
            }

            return <View data={data} {...this.props} />
        }
    }
};

export default withData;