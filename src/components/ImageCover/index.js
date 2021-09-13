import React from "react";
import './index.scss'
import Preview from '../../images/preview.png'
import ArrowDown from '../../images/arrow-down.png'

const ImageCover = () => {
    const style = {backgroundImage: `url(${Preview})`}
    return (
        <div className="image-cover__container" style={style}>
            <div className="opacity"/>
            <div className="label__container pokemon-font">
                <div className="label">Pika Chicken</div>
                <div className="horizontal-line"/>
                <div className="location">San Francisco , Abella 4400 Naga City, Philippines</div>
            </div>
            <div className="arrow-down__container">
                <img src={ArrowDown} alt="arrow-down"/>
            </div>
        </div>
    )
}

export default ImageCover
