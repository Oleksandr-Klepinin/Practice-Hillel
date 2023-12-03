'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const elements = {
        temperature: document.getElementById('temperature'),
        pressure: document.getElementById('pressure'),
        description: document.getElementById('description'),
        humidity: document.getElementById('humidity'),
        windSpeed: document.getElementById('wind-speed'),
        windDirection: document.getElementById('wind-direction'),
        weatherIcon: document.getElementById('weather-icon'),
        lastUpdateTime: document.getElementById('last-update-time')
    };

    const config = {
        apiKey: '262665ced7d986c4433c27e09ae0daf2',
        city: 'Kharkiv',
        apiUrl: 'https://api.openweathermap.org/data/2.5/weather',
        units: 'metric'
    };

    async function fetchData() {
        const url = `${config.apiUrl}?q=${config.city}&units=${config.units}&appid=${config.apiKey}`;

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            return response.json();
        } catch (error) {
            console.error('Error while retrieving data:', error.message);
        }
    }

    function displayWeather(data) {
        const currentDate = new Date();
        const formattedLastUpdateTime = currentDate.toLocaleString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        });

        updateElementText(elements.lastUpdateTime, `Last update: ${formattedLastUpdateTime}`);

        updateElementText(elements.temperature, `Temperature: ${data.main.temp}°C`);
        updateElementText(elements.pressure, `Pressure: ${data.main.pressure} hPa`);
        updateElementText(elements.description, `Description: ${data.weather[0].description}`);
        updateElementText(elements.humidity, `Humidity: ${data.main.humidity}%`);
        updateElementText(elements.windSpeed, `Wind speed: ${data.wind.speed} m/s`);
        updateElementText(elements.windDirection, `Direction of the wind: ${data.wind.deg}°`);
        elements.weatherIcon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    }

    function updateElementText(element, text) {
        element.textContent = text;
    }

    document.getElementById('update-button').addEventListener('click', function () {
        updateWeather();
    });

    async function updateWeather() {
        try {
            const data = await fetchData();
            displayWeather(data);
        } catch (error) {
            console.error('Error updating weather:', error.message);
        }
    }

    updateWeather();
});