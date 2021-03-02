import React, {Component} from "react";
import './with-search.css';

const withSearch = (View) => {
    return class extends Component {
        state = {
            searchValue: ''
        };

        handleChange = (event) => {
            this.setState({searchValue: event.target.value});
        };

        render() {
            return (
                <React.Fragment>
                    <form onSubmit={this.handleSubmit} className="search">
                        <input type="text" className="form-control form-control-sm"
                               id="inputSmall" value={this.state.value} placeholder="/ s e a r c h"
                               onChange={this.handleChange}/>
                    </form>
                    <View searchValue={this.state.searchValue} {...this.props} />
                </React.Fragment>
            )
        }
    }
};

export default withSearch;