import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'

class App extends React.Component{
    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers: {
                Authorization: 'Client-ID ee758b02f42719b44226bc7eefcc4d53eaa3763d9ccb9c7013fc33981cbc9e1e'
            }
        });
    }
    
    render(){
        return (
            <div className="ui container" style={{ marginTop : '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
};

export default App;