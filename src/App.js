import React, { Component } from "react";
import SearchBar from "./containers/search_bar";
import LocalWeather from "./containers/local_weather";
import SearchResult from "./containers/search_result";

class App extends Component {
  render() {
    return (
      <div className="row container">
        <div className="col s8">
          <SearchBar />
          <SearchResult />
        </div>
        <div className="col s4">
          <LocalWeather />
        </div>
      </div>
    );
  }
}

export default App;
