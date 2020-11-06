import React from 'react';
import './Weather.css';
import Day from '../day/Day.jsx';
import ImageWeather from '../image/ImageWeather.jsx';
import Temperature from '../temperatures/Temperature.jsx';

class Weather extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="weather">
                <Day day={this.props.day}/>
                <ImageWeather image={this.props.image} />
                <Temperature temperature={this.props.temperature} />
            </div>
        );
    }
}

export default Weather;