import React from 'react';
// Styles
import './title.css';

const Title = (props) => (
    <div className="Title">
        <h2>
            {props.title}
        </h2>
    </div>
)

export default Title;