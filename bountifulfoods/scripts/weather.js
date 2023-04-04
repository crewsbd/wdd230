// select HTML elements in the document
const temperature = document.querySelector('#temperature');
const icon = document.querySelector('#weather-icon');
const description = document.querySelector('#weather-description');
const humidity = document.querySelector('#humidity');
const forecast = document.querySelector('#forecast');

const daysForecast = 3;
const forecastInterval = 3; //hours
const forecastsPerDay = 24 / forecastInterval //8

const daysEnum = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

const url = "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=3b3063fe321e289fc470d76eaa47f24d";
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&units=imperial&appid=3b3063fe321e289fc470d76eaa47f24d";

async function apiFetch() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
function calculateWindChill(speed, temp) {
    if (windSpeed > 3.0 & temperature <= 50) {
        return (35.74 + .621 * temp - (35.75 * speed ** .16) + .4275 * temp * speed ** .16).toFixed(0);
    }
    else {
        return "N/A"
    }
}
function toUpperCamelCase(inputString) {
    return inputString.split(" ").map(word => {
        let firstLetter = word.charAt(0).toUpperCase();
        return `${firstLetter}${word.slice(1)}`;
    }).join(" ");
}
function displayResults(weatherdata) {
    const currentWeather = weatherdata.list[0];

    temperature.innerHTML = `<strong>${currentWeather.main.temp.toFixed(0)}°F</strong>`;
    icon.setAttribute("src", `https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@4x.png`);
    icon.setAttribute("alt", `${currentWeather.weather[0].description}`);
    const capitalizedDescription = toUpperCamelCase(currentWeather.weather[0].description);
    description.innerHTML = `<h3>${capitalizedDescription}</h3>`;
    humidity.innerHTML = `<h3>Humidity: ${currentWeather.main.humidity}</h3>`;
    let forecastHTML = "<h3>FORECAST</h3>";
    for (let i = 0; i < 3*8; i += forecastsPerDay) {
        const forecastDate = new Date();
        forecastDate.setTime(weatherdata.list[i].dt * 1000);
        forecastHTML += `<div class="forecast-item">${daysEnum[forecastDate.getDay()]}<br>High: ${avgMax(i, weatherdata)}°F<br>Low: ${avgMin(i,weatherdata)}°F</div>`;
    }
    forecast.innerHTML = forecastHTML;
}
function avgMax(startIndex, forecasts) {
    let sum = 0;
    for (let i = startIndex; i < startIndex + forecastsPerDay; i++) {
        sum += forecasts.list[i].main.temp_max;
    }
    return Math.floor(sum / forecastsPerDay);
}
function avgMin(startIndex, forecasts) {
    let sum = 0;
    for (let i = startIndex; i < startIndex + forecastsPerDay; i++) { 
        sum += forecasts.list[i].main.temp_min;
    }
    return Math.floor(sum / forecastsPerDay);
}

apiFetch();