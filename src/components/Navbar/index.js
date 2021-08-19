import React from 'react';
import './index.scss'
import {Col, Row} from 'react-bootstrap';
import Name from '../Name';

const Navbar = ({style}) => {
    return (
        <div className="navbar__container" style={style}>
            <div className="navbar-content">
                <Row>
                    <Col sm={2} md={3} lg={3}>
                        <div className="logo-left">
                            <Name/>
                        </div>
                    </Col>
                    <Col sm={{span: 5, offset: 5}} md={{span: 5, offset: 4}} lg={{span: 5, offset: 4}}>
                        <div className="items-right">
                            <div className="item pokemon-font">Home</div>
                            <div className="item pokemon-font">Menu</div>
                            <div className="item pokemon-font">Order</div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="curve">
                <div className="curve-left"/>
                <div className="curve-right"/>
            </div>
        </div>
)
}

export default Navbar
