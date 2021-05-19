'use strict'

document.querySelector("#inner-circle").addEventListener("click", () => {
    //document.querySelector(".toggle-btn").classList.toggle('active');
    console.log("hi");
});

//document.querySelector('#getWeather').addEventListener('click', getCity);
/*function getCity() {
    let city = document.querySelector('#location').value.split(",");
    fetch(``, {
        mode: 'cors'
    })
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            const info = {
                city: data.city.name,
                country: data.city.country,
                temp: data.list[0].main.temp,
                tempMax: data.list[0].main.temp_max,
                tempMin: data.list[0].main.temp_min,
                precipitation: data.list[0].rain['3h'],
                humidity: data.list[0].main.humidity,
                wind: data.list[0].wind.speed,
                weather: data.list[0].weather[0].description,

            }
            console.log(info);
            let output = `
            <h1 id="place">${info.city}, ${info.country}</h1>
            <div id="temp">${info.temp}</div>
            <div id="temp-max">High: ${info.tempMax}</div>
            <div id="temp-min">Low: ${info.tempMin}</div>
            <div id="precipitation">Precipitation: ${info.precipitation}</div>
            <div id="humidity">Humidity: ${info.humidity}</div>
            <div id="wind-speed">Wind: ${info.wind}</div>
            <div id="weather-image">${info.weather}</div>
            `;
            document.querySelector('#output').innerHTML = output;
        });
}*/

let city = document.querySelector('#location').value.split(",");
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
        /*if (data.weather.main.rain) {
            info.precipitation = Math.round(data.list[0].weather.main.rain);
            document.querySelector("#details-container") = `Precipitation: ${info.precipitation}%`;
        }*/

        let celcius = Math.round((info.temp - 32) * .5556);
        let celciusHigh = Math.round(info.tempMax);
        let celciuslow = Math.round(info.tempMin);
        let fahrenheit = Math.round(info.temp);
        let fahrenheitHigh = Math.round(info.tempMax);
        let fahrenheitLow = Math.round(info.tempMin);
        let humidity = Math.round(info.humidity);
        let wind = Math.round(info.wind);
        console.log(info);
        let output = `
        <div id="main">
            <h1 id="place">${info.city}, ${info.country}</h1>
            <div id="temp">${fahrenheit}&#176 F / ${celcius}&#176 C</div>
            <div id="weather-description">${info.weather}</div>
            <img id="weather-image" alt="weather image" src="http://openweathermap.org/img/wn/${info.icon}@2x.png">
            </div>
            <div id="temp-container">
            <div id="temp-max">High: ${celciusHigh}&#176 F / ${celciuslow}&#176 C</div>
            <div id="temp-low">Low: ${fahrenheitLow}&#176 F / ${fahrenheitLow}&#176 C</div>
            </div>
            <div id="details-container">
            <div id="humidity">Humidity: ${humidity}%</div>
        <div id="wind-speed">Wind: ${wind} mph</div>
            </div >
        `;
        document.querySelector('#output').innerHTML += output;
    });
