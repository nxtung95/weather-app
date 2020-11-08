import React from 'react';
import './Weather.css';
import Day from '../day/Day';
import ImageWeather from '../image/ImageWeather';
import Temperature from '../temperatures/Temperature';
import WeatherModal from "../modal/WeatherModal";
import UseModal from '../modal/UseModal';

const weather = (props) => {
    const { isShowing, toggle } = UseModal();
    return (
        <div className="weather" onClick={toggle}>
            <Day day={props.day} />
            <ImageWeather image={props.image} />
            <Temperature temperature={props.temperature} />
            <WeatherModal
                isShowing={isShowing}
                hide={toggle}
            />
        </div>
    );
}

export default weather;