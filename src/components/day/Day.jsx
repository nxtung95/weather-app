import React from 'react';
import './Day.css';
class Day extends React.Component {
    render() {
        return (
            <div className="day">{this.props.day}</div>
        );
    }
}

export default Day;