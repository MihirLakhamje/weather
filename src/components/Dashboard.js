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

    // Daily update state
    const [daily, setDaily] = useState();

    const [location, setLocation] = useState();



    async function getWeather() {

        const key = process.env.REACT_APP_API_KEY;
        const { data } = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/mumbai/2023-03-31/2023-04-07?unitGroup=us&include=days%2Ccurrent&key=${key}&contentType=json`);
        console.log(data)
        let geoObj = {
            lat: data.latitude,
            lon: data.longitude
        }

        // Destructuring currentConditions object
        const { temp: currTemp, windspeed: currWindSpeed, conditions: currStatus, pressure: currPressure, datetimeEpoch: currTime, icon: currIcon } = data.currentConditions;
        setCTemp(currTemp)
        setCWindspeed(currWindSpeed)
        setCStatus(currStatus)
        setCPressure(currPressure)
        setCTime(currTime * 1000)
        setCIcon(currIcon)

        setDaily(data.days);
        // setHourly(data.days);
        navigator.geolocation.getCurrentPosition(successCall, positionError);

        function successCall() {
            return geoObj;
        }

        function positionError() {
            alert("There is error getting your location. Please refresh the page.");
        }
    }
    async function getlocation() {
        let url = "https://ipinfo.io/json?token=348ec8e3fde68f";
        let res = await fetch(url);
        let data = await res.json();
        let city, state, country;
        city = data.city;
        state = data.region;
        country = data.country;
        let loc = `${city}, ${state}, ${country}`;
        setLocation(loc);
    }

    useEffect(() => {
        getWeather()
        getlocation()
    }, [location]);
    const IconN = () => { return `img/animated/${Icon_Map.get(cIcon)}.svg` }



    // let Date_Format = new Intl.DateTimeFormat(undefined, { dateStyle: "medium" });

    // let timestamp = new Intl.DateTimeFormat('eu-US').format();

    return (
        <>
            <ClimatePanel temperature={Math.round(cTemp)} pressure={Math.round(cPressure)} windspeed={Math.round(cWindSpeed)} status={cStatus} time={ctime} iconNum={IconN()} location={location} />

            <table className="table mt-3">
                <thead>
                    <tr>
                        <th scope="col">Days</th>
                        <th scope="col">Avg. Temp</th>
                        <th scope="col">Humidity</th>
                        <th scope="col">Wind Speed</th>
                        <th scope="col">Pressure</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {daily && daily.map((days, index) => {
                        // Destructuring days object
                        const { datetimeEpoch: day, temp: avgTemp, humidity: humid, windspeed: windSpeed, pressure: Pressure, conditions: Status, icon: Icon } = days;
                        const IconNday = () => { return `img/animated/${Icon_Map.get(Icon)}.svg` }
                        // wrap in fragment for unique key
                        return <React.Fragment key={index}>
                            <DailyUpdate dailyTemp={Math.round(avgTemp)} day={day * 1000} humid={Math.round(humid)} windspeed={Math.round(windSpeed)} pressure={Math.round(Pressure)} status={Status} iconNum={IconNday()} />
                        </React.Fragment>
                    })
                    }
                </tbody>
            </table>

        </>
    )
}
