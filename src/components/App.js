import React, { Component } from 'react';
import SearchBar from './SearchBar';
import WeatherList from './weather_list';

class App extends Component{

    render(){
       return (
        <div className="search-bar">
            <SearchBar />
            <WeatherList/>
        </div>
       );
    }
}

export default App;
