import React, { } from 'react'
import { Card, Col, Row } from 'react-bootstrap'

export default function ClimatePanel(props) {
    let time = Date.now();
    let Time_Format = new Intl.DateTimeFormat(undefined, { hour: "2-digit", minute: "2-digit" });
    return (
        <>
            <Card.Body className='border p-4 rounded'>
                <Row>
                    <Col sm={7}>
                        <div className='d-flex flex-column gap-5  me-3'>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <i className="fa-sharp fa-solid fa-location-dot"></i>
                                    <span className='ms-2'>{props.location}</span>

                                </div>
                                <span>Today, {Time_Format.format(time)}</span>
                            </div>
                            <div className="text-center">
                                <h2 className='fs-1'>{props.temperature}&#8451;</h2>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <i className="fa-solid fa-wind"></i>
                                    <span className='ms-1'>{props.pressure} mb</span>
                                </div>
                                <div>
                                    <i className="fa-solid fa-wind"></i>
                                    <span className='ms-1'>{props.windspeed} Km/h</span>
                                </div>
                                <div>
                                    <i className="fa-regular fa-sun"></i>
                                    <span className='ms-1'>{props.status} </span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={5}>
                        <div className='d-flex justify-content-center' style={{ height: "200px" }}>
                            <img src={props.iconNum} alt="" className='current-img' />
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </>
    )
}
