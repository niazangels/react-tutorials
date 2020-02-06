import React from 'react';
// import ReactDOM from 'react-dom';
// Superagent https://visionmedia.github.io/superagent/

class SearchBar extends React.Component {

    state = { term: '' }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image search</label>
                        {/* <input type="text" onClick={this.onInputClick} onChange={this.onInputChange} autoFocus /> */}
                        <input type="text"
                            onChange={(e) => this.setState({ term: e.target.value })}
                            value={this.state.term}
                            autoFocus />
                    </div>
                </form>
            </div>

        );
    }
}

export default SearchBar;