import React from 'react'
import { Link } from 'react-router-dom'

export default function Dev() {
    // This component is temprary...
    return (
        <>
            <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: "50vh" }}>
                <div style={{ height: "300px" }}>
                    <video style={{ width: "300px" }} autoPlay muted loop>
                        <source src='img/animated/dev.mp4' type='video/mp4' />
                    </video>

                </div>
                <h2>Website is under construction</h2>
                <h3 className='fs-6'>Meanwhile, checkout today's <Link to="/weather/">Weather</Link></h3>
            </div >
        </>
    )
}
