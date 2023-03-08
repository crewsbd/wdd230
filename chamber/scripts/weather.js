// select HTML elements in the document
const temperature = document.querySelector('#temperature');
const icon = document.querySelector('#weather-icon');
const description = document.querySelector('#weather-description');
const windSpeed = document.querySelector('#wind-speed');
const windChill = document.querySelector('#wind-chill');

const url = "https://api.openweathermap.org/data/2.5/weather?q=Fremont&units=imperial&appid=3b3063fe321e289fc470d76eaa47f24d";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data); // this is for testing the call
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
    const description = weatherdata.weather[0].description.toLowerCase();
    const capitalizedDescription = toUpperCamelCase(description);

    temperature.innerHTML = `<strong>${weatherdata.main.temp.toFixed(0)}</strong>`;
    icon.setAttribute("src", `https://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@4x.png`);
    icon.setAttribute("alt", `${weatherdata.weather[0].description}`);
    description.textContent = capitalizedDescription;
    windSpeed.innerHTML = `${weatherdata.wind.speed}`;
    windChill.innerHTML = `${calculateWindChill(weatherdata.wind.speed, weatherdata.main.temp)}`;
}

apiFetch();