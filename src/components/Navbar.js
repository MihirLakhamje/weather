import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'


export default function Navbar() {
    let location = useLocation();

    useEffect(() => { }, [location]);

    return (
        <>

            <ul className="list-group d-flex mt-3">
                <Link to='/' className='link'>
                    <li className={`list-group-item py-3 ${location.pathname === "/" ? 'active' : ""}`}>Weather Forcast</li>
                </Link>

                <Link to='/map' className='link'>
                    <li className={`list-group-item py-3 ${location.pathname === "/map" ? 'active' : ""}`}>Map</li>
                </Link>

                <Link to='/calender' className='link'>
                    <li className={`list-group-item py-3 ${location.pathname === "/calender" ? 'active' : ""}`}>Calender</li>
                </Link>

                <Link to='/setting' className='link'>
                    <li className={`list-group-item py-3 ${location.pathname === "/setting" ? 'active' : ""}`}>Settings</li>
                </Link>
            </ul>
        </>
    )
}
