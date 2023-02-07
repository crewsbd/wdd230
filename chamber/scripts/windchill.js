let windSpeed = 3.1;
let temperature = 49;

function CalculateWindChill(speed, temp) {
    return 35.74 + .621*temp - (35.75*speed**.16) + .4275*temp*speed**.16;
}

document.querySelector("#temperature").textContent = temperature;
document.querySelector("#wind-speed").textContent = windSpeed;
document.querySelector("#wind-chill").textContent = CalculateWindChill(windSpeed, temperature).toFixed(1);
document.querySelector("#weather-icon").setAttribute("src", "images/weather-rainy.svg");
