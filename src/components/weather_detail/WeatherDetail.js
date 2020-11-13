import React from 'react';

const detail = (props) => {
    const hourOneDay = props.hourOneDay;
    console.log(hourOneDay);
    const { day } = props.match.params;
    return <div>{day}</div>
}

export default detail;