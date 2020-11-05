import React from 'react';
import './Temperature.css';

class Temperature extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="tempareture">
                <div className="tempareture-high">{this.props.tempareture.high}</div>
                <div className="tempareture-low">{this.props.tempareture.low}</div>
            </div>
        );
    }
}

export default Temperature;