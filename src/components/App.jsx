import React from "react";
import axios from 'axios';
import SearchBar from "./SearchBar";

class App extends React.Component {

    onSearchSubmit = term => {
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID Td4p-P39ZJdP1Y8xvbl8YKQSRgJUy1yx21pBegzasG0' 
            }
        }); 
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <h1><SearchBar onSubmit={this.onSearchSubmit}/></h1>
            </div>
        )
    }
}

export default App;