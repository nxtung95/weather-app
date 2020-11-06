import React from 'react';
import './ImageWeather.css';

class ImageWeather extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <img src={this.props.image} alt="image-weather"></img>
        );
    }
}

export default ImageWeather;