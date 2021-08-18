import React from "react";
import PikaChicken from '../../images/pika-chicken.png'
import './index.scss'
import {Col, Row} from "react-bootstrap";

const Navbar = () => {
    return (
        <div className="navbar__container">
            <Row>
                <Col sm={2} md={3} lg={3}>
                    <div className="logo-left">
                        <img src={PikaChicken} alt="Pika chicken logo"/>
                    </div>
                </Col>
                <Col sm={{span: 5, offset: 5}} md={{span: 4, offset: 5}} lg={{span: 4, offset: 5}}>
                    < div className="items-right">
                        <div className="item">Home</div>
                        <div className="item">Menu</div>
                        <div className="item">Order</div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Navbar
