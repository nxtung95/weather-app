import React from 'react';
import Weather from './components/weather/Weather';
import './index.css';
import WeatherAppUtil from './utils/WeatherAppUtil';

class WeatherApp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const daily = this.props.daily;
        const hourly = this.props.hourly;
        return (
            <div className='container'>
                {
                    daily.map((value, index) => {
                        let date = new Date(value.dt * 1000);
                        let image = WeatherAppUtil.getImageWeather(value.weather[0].main);
                        let hourOneDay = WeatherAppUtil.getHourForOneDay(hourly, date);
                        let temp = { low: parseInt(value.temp.min), high: parseInt(value.temp.max) };
                        return <Weather
                            day={weekday[date.getDay()]}
                            image={image}
                            temperature={temp}
                            key={index}
                            hourOneDay={hourOneDay}
                        />
                    })
                }
            </div>
        );
    }
}

export default WeatherApp;