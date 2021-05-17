'use strict'


document.querySelector('#getWeather').addEventListener('click', getCity);
function getCity() {
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
                humidity: data.list[0].main.humidity,
                weather: data.list[0].weather[0].description,

            }
            console.log(info);
            let output = `
            <h1 id="place">${info.city}, ${info.country}</h1>
            <div id="temp">${info.temp}</div>
            <div id="humidity">${info.humidity}</div>
            <div id="humidity">${info.weather}</div>
            `;
            document.querySelector('#output').innerHTML = output;
        });
}