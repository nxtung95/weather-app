import React from 'react';
import './ImageWeather.css';

class ImageWeather extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <image src={this.props.image} alt="image-weather"></image>
        );
    }
}

export default ImageWeather;