import React from 'react';
import './Weather.css';
import Day from '../day/Day';
import ImageWeather from '../image/ImageWeather';
import Temperature from '../temperatures/Temperature';
// import WeatherModal from "../modal/WeatherModal";
// import UseModal from '../modal/UseModal';

class Weather extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        window.location.href = `/${this.props.day}`;
    }

    render() {
        return (
            <div className="weather" onClick={this.handleClick}>
                <Day day={this.props.day} />
                <ImageWeather image={this.props.image} />
                <Temperature temperature={this.props.temperature} />
            </div>
        );
    }
}
// const weather = (props) => {
//     // const { isShowing, toggle } = UseModal();
//     return (
//         <div className="weather" onClick={ }>
//             <Day day={props.day} />
//             <ImageWeather image={props.image} />
//             <Temperature temperature={props.temperature} />
//             {/* <WeatherModal
//                 isShowing={isShowing}
//                 hide={toggle}
//             /> */}
//         </div>
//     );
// }

export default Weather;