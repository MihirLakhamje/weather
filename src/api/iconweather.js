export const Icon_Map = new Map();

addMap(["clear-day"], "day");
addMap(["clear-night"], "night");
addMap(["partly-cloudy-day"], "partial-cloudy");
addMap(["partly-cloudy-night"], "partial-cloudy");
addMap(["cloudy"], "cloudy-day-1");
addMap(["wind"], "cloudy-day-2");
addMap(["fog"], "foggy");
addMap(["rain"], "rainy-2");
addMap(["snow"], "snowy-2");



function addMap(value, nameIcon) {
    value.forEach(value => {
        Icon_Map.set(value, nameIcon);
    });
}


export const getLegend = [
    {
        icon: "fa-sharp fa-solid fa-location-dot",
        name: "Location"
    },
    {
        icon: "fa-solid fa-wind",
        name: "Wind / Pressure"
    },
    {
        icon: "fa-solid fa-arrows-rotate",
        name: "Update Page"
    },
    {
        icon: "fa-solid fa-person-rays",
        name: "Humidity"
    }
];
export const getIcons = [
    {
        wIcon: "/weather/img/static/day.svg",
        name: "Clear day"
    },
    {
        wIcon: "/weather/img/static/night.svg",
        name: "clear night"
    },
    {
        wIcon: "/weather/img/static/cloudy-day-1.svg",
        name: "partly cloudy"
    },
    {
        wIcon: "/weather/img/static/cloudy.svg",
        name: "cloudy"
    },
    {
        wIcon: "/weather/img/static/cloudy-day-2.svg",
        name: "wind"
    },
    {
        wIcon: "/weather/img/static/cloudy-day-3.svg",
        name: "fog"
    },
    {
        wIcon: "/weather/img/static/rainy-2.svg",
        name: "rain"
    },
    {
        wIcon: "/weather/img/static/snowy-2.svg",
        name: "snow"
    },
];
