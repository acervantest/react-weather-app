import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component{

    renderWeather(cityData){
        const nameCity = cityData.city.name; 
        return(
            <tr key={nameCity}>
                <td>{nameCity}</td>
            </tr>
        )
        
    }

    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperatue</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.weather.map(this.renderWeather) }
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }){
    return {
        weather
    }
}
export default connect(mapStateToProps)(WeatherList);