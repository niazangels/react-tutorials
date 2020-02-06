import React from 'react';
import unspash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {

    state = { images: [] };

    // async onSearchSubmit(term) {
    onSearchSubmit = async (term) => {
        console.log(term);
        const response = await unspash.get('/search/photos', {
            params: { query: term },

        });/*.then(response => {
            console.log(response.data.results)
        });*/
        this.setState({ images: response.data.results })
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={e => { this.onSearchSubmit(e) }} />
                <ImageList images={this.state.images}></ImageList>
            </div >
        );
    }
}

export default App;