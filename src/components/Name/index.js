import React from 'react';
import './index.scss'

const Name = ({style}) => {
    return (
        <div className="name__container" style={style}>
            <span className="name pokemon-font">Pika! Chicken</span>
        </div>
    )
}

export default Name;
