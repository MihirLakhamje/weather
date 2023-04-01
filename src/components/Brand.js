import React from 'react'
import Brandlogo from '../assets/logo-48.svg'
import { Link } from "react-router-dom";

export default function Brand() {
    return (
        <>
            <div className='mb-3 d-flex align-items-center gap-3'>
                <Link to="/" className='link'>
                    <img src={Brandlogo} alt="Brand logo" />
                </Link>

                <h1 className='fs-3 '><Link to='/' className='link'>Forcasting App</Link></h1>
            </div>
        </>
    )
}
