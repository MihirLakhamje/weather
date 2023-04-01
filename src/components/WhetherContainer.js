import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard';
import Map from './Map';
import Calender from './Calender';


export default function WhetherContainer() {
    // All features will be displayed through these component using react-router-dom


    return (
        <>
            <Routes>
                <Route exact path='/' element={<Dashboard />} />

                <Route path='/map' element={<Map />} />

                <Route path='/calender' element={<Calender />} />
            </Routes>
        </>
    )
}
