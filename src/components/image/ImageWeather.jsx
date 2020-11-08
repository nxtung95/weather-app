import React from 'react';
import './ImageWeather.css';

class ImageWeather extends React.Component {
    render() {
        return (
            <img src={this.props.image} alt="weather"></img>
        );
    }
}

export default ImageWeather;