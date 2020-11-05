import React from 'react';
import './Day.css';
class Day extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="day">{this.props.day}</div>
        );
    }
}

export default Day;