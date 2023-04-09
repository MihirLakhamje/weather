import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'

export default function ClimatePanel(props) {
    const [time, setTime] = useState(new Date())
    let Time_Format = new Intl.DateTimeFormat(undefined, { hour: "2-digit", minute: "2-digit" });
    function reloadPage() {
        window.location.reload();
    }

    useEffect(() => {
        setInterval(() => { setTime(new Date()) }, 60000);
    }, [])

    return (
        <>
            <Card.Body className='border p-3  rounded'>
                <Row>
                    <Col sm={12} md={6} lg={7} className=''>
                        <div className='d-flex flex-column gap-5  me-lg-3'>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <i className="fa-sharp fa-solid fa-location-dot"></i>
                                    <span className='ms-1'>{props.location}</span>

                                </div>
                                <div>

                                    <i onClick={reloadPage} className="fa-solid fa-arrows-rotate pointer me-1"></i>
                                    <span>Today, {Time_Format.format(time)}</span>
                                </div>
                            </div>
                            <div className="text-center">
                                <h2 className='fs-1'>{props.temperature}&#8451;</h2>
                            </div>
                            <div className='d-flex justify-content-between flex-grow-1 flex-shrink-1 flex-md-row'>
                                <div>
                                    <i className="fa-solid fa-wind"></i>
                                    <span className='ms-1'>{props.pressure} mb</span>
                                </div>
                                <div>
                                    <i className="fa-solid fa-wind"></i>
                                    <span className='ms-1'>{props.windspeed} Km/h</span>
                                </div>
                                <div>
                                    <i className="fa-solid fa-person-rays"></i>
                                    <span className='ms-1'>{props.humid}%</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={5}>
                        <div className='d-flex justify-content-center flex-column align-items-center' style={{ height: "200px" }}>
                            <img src={props.iconNum} alt="" className='current-img' />
                            <h4 className='mb-4'>{props.status} </h4>
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </>
    )
}
