import React from 'react';

const detail = (props) => {
    const { day } = props.match.params;
    return <div>{day}</div>
}

export default detail;