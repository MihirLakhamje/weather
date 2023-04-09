import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ClimatePanel from './ClimatePanel'
import { Icon_Map } from '../api/iconweather';
import DailyUpdate from './DailyUpdate';



export default function Dashboard() {
    // Current update states
    const [cTemp, setCTemp] = useState();
    const [cWindSpeed, setCWindspeed] = useState();
    const [cStatus, setCStatus] = useState();
    const [cPressure, setCPressure] = useState();
    const [ctime, setCTime] = useState();
    const [cIcon, setCIcon] = useState();
    const [cHumid, setCHumid] = useState();

    // Daily update state
    const [daily, setDaily] = useState();

    // Update location
    const [location, setLocation] = useState();



    async function getWeather() {

        const key = process.env.REACT_APP_API_KEY;
        const { data } = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/mumbai?unitGroup=metric&include=days%2Ccurrent&key=${key}&contentType=json`);
        let geoObj = {
            lat: data.latitude,
            lon: data.longitude
        }

        // Destructuring currentConditions object
        const { temp: currTemp, windspeed: currWindSpeed, conditions: currStatus, pressure: currPressure, datetimeEpoch: currTime, icon: currIcon, humidity: humid } = data.currentConditions;
        setCTemp(currTemp)
        setCWindspeed(currWindSpeed)
        setCStatus(currStatus)
        setCPressure(currPressure)
        setCTime(currTime * 1000)
        setCIcon(currIcon)
        setCHumid(humid)


        setDaily(data.days);

        // To get users position
        navigator.geolocation.getCurrentPosition(successCall, positionError);
        function successCall() {
            return geoObj;
        }
        function positionError() {
            return ("There is error getting your location. Please refresh the page.");
        }
    }


    // This api for fetching exact location and display state and city
    async function getlocation() {
        let url = "https://ipinfo.io/json?token=348ec8e3fde68f";
        let res = await fetch(url);
        let data = await res.json();
        let city, state;
        city = data.city;
        state = data.region;
        let loc = `${city}, ${state}`;
        setLocation(loc);
    }

    useEffect(() => {
        getWeather()
        getlocation()
    }, [location]);

    // map all weather icons remotely
    const IconN = () => { return `/weather/img/animated/${Icon_Map.get(cIcon)}.svg` }

    return (
        <>
            <ClimatePanel temperature={Math.round(cTemp)} pressure={Math.round(cPressure)} windspeed={Math.round(cWindSpeed)} status={cStatus} time={ctime} humid={cHumid} iconNum={IconN()} location={location} />

            <div style={{ overflowX: "auto" }}>
                <h2 className='mt-4'>Daily Update</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Days</th>
                            <th scope="col">Temp</th>
                            <th scope="col">Humidity</th>
                            <th scope="col">Wind</th>
                            <th scope="col">Pressure</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {daily && daily.map((days, index) => {
                            // Destructuring days object
                            const { datetimeEpoch: day, tempmax: avgTemp, humidity: humid, windspeed: windSpeed, pressure: Pressure, conditions: Status, icon: Icon } = days;
                            const IconNday = () => { return `img/animated/${Icon_Map.get(Icon)}.svg` }
                            // wrap in fragment for unique key
                            return <React.Fragment key={index}>
                                <DailyUpdate dailyTemp={Math.round(avgTemp)} day={day * 1000} humid={Math.round(humid)} windspeed={Math.round(windSpeed)} pressure={Math.round(Pressure)} status={Status} iconNum={IconNday()} />
                            </React.Fragment>
                        })
                        }
                    </tbody>
                </table>
            </div>

        </>
    )
}
