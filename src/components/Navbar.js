import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'


export default function Navbar() {
    let location = useLocation();

    useEffect(() => { }, [location]);

    return (
        <>

            <ul className="list-group d-flex mt-3">
                <Link to='/' className='link'>
                    <li className={`list-group-item py-3 ${location.pathname === "weather/weather/" ? 'active' : ""}`}>Weather</li>
                </Link>

                <Link to='/map' className='link'>
                    <li className={`list-group-item py-3 ${location.pathname === "weather/weather/map" ? 'active' : ""}`}>Map</li>
                </Link>

                <Link to='/calender' className='link'>
                    <li className={`list-group-item py-3 ${location.pathname === "weather/weather/calender" ? 'active' : ""}`}>Calender</li>
                </Link>
            </ul>
        </>
    )
}
