import React, {Component} from "react";
import './with-pagination.css';

const withPagination = (View) => {
    return class extends Component {
        state = {
            page: 1,
            pages: null
        };

        componentDidMount() {
            this.update();
        }

        update() {
            if (this.props.getInfo) {
                this.props.getInfo()
                    .then((data) => {
                        this.setState({
                            pages: data.pages
                        });
                    })
            }
        }

        prevPage = () => {
            if (this.state.page > 1) {
                this.setState({
                    page: this.state.page - 1
                })
            }
        };

        nextPage = () => {
            if (this.state.page < this.state.pages) {
                this.setState({
                    page: this.state.page + 1
                })
            }
        };

        render() {
            let prevButtonSymbol = '<<';
            let nextButtonSymbol = '>>';
            return (
                <React.Fragment>
                    <div className="pagination">
                        <button type="button" className="btn pagination-prev"
                                onClick={this.prevPage}>{prevButtonSymbol}</button>
                        <span className="pagination-page">{this.state.page}</span>
                        <button type="button" className="btn pagination-next"
                                onClick={this.nextPage}>{nextButtonSymbol}</button>
                    </div>
                    <View {...this.props} page={this.state.page}/>
                </React.Fragment>
            )
        }
    }
};

export default withPagination;