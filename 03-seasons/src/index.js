import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner';

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { lat: null, errorMessage: '' };
    // }

    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            error => this.setState({ errorMessage: error.message })
        );
    }

    render() {
        if (this.state.errorMessage) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (!this.state.lat) {
            return <Spinner text="Hey! Allow us to see your location!" />
        }
        return (
            <SeasonDisplay lat={this.state.lat} />
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)