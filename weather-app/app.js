'use strict'
window.addEventListener('load', () => {
    getCity();
});

document.querySelector('#getWeather').addEventListener('click', getCity);

function getCity() {
    let location = document.querySelector('#location').value.split(",");
    fetch(``, {
        mode: 'cors'
    })
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            const info = {
                city: data.name,
                country: data.sys.country,
                temp: data.main.temp,
                tempMax: data.main.temp_max,
                tempMin: data.main.temp_min,
                precipitation: null,
                humidity: data.main.humidity,
                wind: data.wind.speed,
                weather: data.weather[0].description,
                icon: data.weather[0].icon
            }

            let celcius = Math.round((info.temp - 32) * .5556);
            let celciusHigh = Math.round((info.tempMax - 32) * .5556);
            let celciusLow = Math.round((info.tempMin - 32) * .5556);
            let fahrenheit = Math.round(info.temp);
            let fahrenheitHigh = Math.round(info.tempMax);
            let fahrenheitLow = Math.round(info.tempMin);
            let humidity = Math.round(info.humidity);
            let wind = Math.round(info.wind);
            let windSec = Math.round((info.wind * 0.44704));
            console.log(info);
            let output = `
        <div id="main">
            <h1 id="place">${info.city}, ${info.country}</h1>
            <div id="tempFah" class="show">${fahrenheit}&#176 F</div>
            <div id="tempCel" class="hide">${celcius}&#176 C</div>
            <div id="weather-description">${info.weather}</div>
            <img id="weather-image" alt="weather image" src="http://openweathermap.org/img/wn/${info.icon}@2x.png">
            </div>
            <div id="temp-container">
            <div id="temp-max-fah" class="show">High: ${fahrenheitHigh}&#176 F</div>
            <div id="temp-low-fah" class="show">Low: ${fahrenheitLow}&#176 F</div>
            <div id="temp-max-cel" class="hide">High: ${celciusHigh}&#176 C</div>
            <div id="temp-low-cel" class="hide">Low: ${celciusLow}&#176 C</div>
            </div>
            <div id="details-container">
            <div id="humidity">Humidity: ${humidity}%</div>
        <div id="wind-speed" class="show">Wind: ${wind} mph</div>
        <div id="wind-speed-second" class="hide">Wind: ${windSec} mps</div>
            </div >
        `;
            document.querySelector('#output').innerHTML = output;
            document.querySelector('#getWeather').addEventListener('click', getCity);
        });
}

document.querySelector(".toggle-btn").addEventListener("click", () => {
    document.querySelector(".toggle-btn").classList.toggle('active');
    document.querySelectorAll(".hide").forEach((degree) => {
        if (degree.style.display === "block") {
            degree.style.display = "none";
            document.querySelectorAll(".show").forEach((degree) => {
                degree.style.display = "block";
            });
        } else {
            degree.style.display = "block";
            document.querySelectorAll(".show").forEach((degree) => {
                degree.style.display = "none";
            });
        }
    });
});