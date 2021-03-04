import React from "react";
import SearchBar from "./SearchBar"

class App extends React.Component {
    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <h1><SearchBar /></h1>
            </div>
        )
    }
}

export default App;