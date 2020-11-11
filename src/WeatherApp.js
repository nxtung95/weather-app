import React from 'react';
import Weather from './components/weather/Weather';
import Sunny from './components/image/sunny.PNG';
import Cloudy from './components/image/cloudy.PNG';
import Rainy from './components/image/rainy.PNG';
import Snowy from './components/image/snowy.PNG';
import './index.css';

class WeatherApp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const temperature = { low: 45, high: 66 };
        const date = new Date();
        return (
            <div className='container'>
                {
                    weekday.map((index) => {
                        date.setDate(date.getDate() + 1);
                        let day = date.getDay();
                        return <Weather
                            day={weekday[day]}
                            image={Cloudy}
                            temperature={temperature}
                            key={index}
                            callBack={this.hideWeather}
                        />
                    })
                }
            </div>
        );
    }
}

export default WeatherApp;