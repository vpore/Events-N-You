import React from "react";
import './Home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Calendar from "./Calendar/Calendar";
import EventRequest from "./EventRequest/EventRequest";

const Home = () => {
    return(
        <>
            <Container>
                <Row>
                    <Col md={8} sm={12}>
                        <div className="home">
                            <Calendar />
                        </div>
                    </Col>

                    <Col md={4} sm={12}>
                        <div className="home">
                            <EventRequest />
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* <Calendar />
            <EventRequest /> */}
        </>
    );
}

export default Home;