const axios = require("axios");

function getWindDirection(degree) {

    if (degree >= 22 && degree < 67) return "NE";
    if (degree >= 67 && degree < 112) return "E";
    if (degree >= 112 && degree < 157) return "SE";
    if (degree >= 157 && degree < 202) return "S";
    if (degree >= 202 && degree < 247) return "SW";
    if (degree >= 247 && degree < 292) return "W";
    if (degree >= 292 && degree < 337) return "NW";

    return "N";
}

async function getWeather(latitude, longitude) {

    const url =
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,precipitation,wind_direction_10m`;

    const response = await axios.get(url);

    const current = response.data.current;

    return {

        temperature: current.temperature_2m,

        humidity: current.relative_humidity_2m,

        rainfall: current.precipitation,

        windDegree: current.wind_direction_10m,

        windDirection: getWindDirection(
            current.wind_direction_10m
        )
    };
}

module.exports = getWeather;