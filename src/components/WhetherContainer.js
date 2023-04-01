import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard';
import Map from './Map';
import Calender from './Calender';
import Setting from './Setting';


export default function WhetherContainer() {


    return (
        <>
            <Routes>
                <Route path='/' element={<Dashboard />} />

                <Route path='/map' element={<Map />} />

                <Route path='/calender' element={<Calender />} />

                <Route path='/setting' element={<Setting />} />
            </Routes>
        </>
    )
}
