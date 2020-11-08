import React from 'react';
import './Temperature.css';

class Temperature extends React.Component {
    render() {
        return (
            <div className="temperature">
                <div className="high">
                    {this.props.temperature.high}
                    <span>c</span>
                </div>
                <div className="low">
                    {this.props.temperature.low}
                    <span>c</span>
                </div>
            </div>
        );
    }
}

export default Temperature;