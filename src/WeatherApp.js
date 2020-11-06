import React from 'react';
import Weather from './components/weather/Weather';
import Sunny from './components/image/sunny.PNG';
import Cloudy from './components/image/cloudy.PNG';
import Rainy from './components/image/rainy.PNG';
import Snowy from './components/image/snowy.PNG';
import './index.css';

class WeatherApp extends React.Component {
    render() {
        const temperature = { low: 45, high: 66 };
        return (
            <div className='container'>
                <Weather day='Wed' image={Sunny} temperature={temperature} />
                <Weather day='Wed' image={Cloudy} temperature={temperature} />
                <Weather day='Wed' image={Rainy} temperature={temperature} />
                <Weather day='Wed' image={Snowy} temperature={temperature} />
                <Weather day='Wed' image={Sunny} temperature={temperature} />
                <Weather day='Wed' image={Rainy} temperature={temperature} />
                <Weather day='Wed' image={Cloudy} temperature={temperature} />
            </div>
        );
    }
}

export default WeatherApp;