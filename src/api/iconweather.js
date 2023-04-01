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

