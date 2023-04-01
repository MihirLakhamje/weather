// // https://api.open-meteo.com/v1/forecast?latitude=19.05&longitude=72.86&hourly=temperature_2m,apparent_temperature,rain,weathercode,pressure_msl,surface_pressure,windspeed_10m&daily=weathercode,temperature_2m_max,uv_index_max&current_weather=true&timeformat=unixtime&timezone=Asia%2FSingapore

// import axios from 'axios';

// export function getClimate(lat, lon, timezone) {
//     return axios.get("https://api.open-meteo.com/v1/forecast?hourly=temperature_2m,apparent_temperature,rain,weathercode,surface_pressure,windspeed_10m&daily=weathercode,temperature_2m_max,uv_index_max&current_weather=true&timeformat=unixtime", {
//         params: {
//             longitude: lon,
//             latitude: lat,
//             timezone,
//         }
//     })
//         .then(({ data }) => {
//             return {
//                 current: parseCurrent(data),
//                 daily: parseDaily(data),
//                 hourly: parseHourly(data)
//             }
//         })

//     function parseCurrent({ current_weather, daily }) {
//         const { temperature: currentTemp, windspeed: windSpeed, weathercode: iconCode } = current_weather;
//         const { temperature_2m_max: [tempMax], uv_index_max: [uvIndex] } = daily;

//         return {
//             currentTemp: Math.round(currentTemp),
//             windSpeed: Math.round(windSpeed),
//             iconCode: Math.round(iconCode),
//             highTemp: Math.round(tempMax),
//             uvInd: Math.round(uvIndex)
//         }
//     }
//     function parseDaily({ daily }) {

//         return daily.time.map((time, index) => {
//             return {
//                 timestamp: time * 1000,
//                 iconCode: daily.weathercode[index],
//                 maxTemp: Math.round(daily.temperature_2m_max[index])
//             }
//         });
//     }

//     function parseHourly({ current_weather, hourly }) {

//         return hourly.time.map((time, index) => {
//             return {
//                 timestamp: time * 1000,
//                 iconCode: hourly.weathercode[index],
//                 temp: Math.round(hourly.temperature_2m[index]),
//                 windSpeed: Math.round(hourly.windspeed_10m[index])
//             }
//         }).filter(({ timestamp }) => timestamp >= current_weather.time * 1000)
//     }


// }


