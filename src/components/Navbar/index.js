import React from "react";
import './index.scss'
import Logo from '../../images/icon.png'
import {Link} from "gatsby";

const Navbar = () => {
    return (
        <div className="navbar__container">
            <div className="leftPart">
                <div className="item">
                    <Link to={'/menu'}>Menu</Link>
                </div>
                <div className="item">
                    <Link to={'/about'}>About</Link>
                </div>
            </div>
            <div className="middle">
                <img src={Logo} alt=""/>
            </div>
            <div className="rightPart">
                <div className="item">
                    <Link to={'/reviews'}>Reviews</Link>
                </div>
                <div className="item">
                    <Link to={'/gallery'}>Gallery</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
