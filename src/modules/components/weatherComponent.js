function displayWeatherData(weatherData, units) {
  const weatherDisplayElement = document.querySelector("#weather-container");
  weatherDisplayElement.innerHTML = `
    <h2>Weather in ${weatherData.location}</p></h2>
    <p>Temperature: ${weatherData.temperature}${units.temperature}</p>
    <p>Condition: ${weatherData.conditions}</p>
    <p>Humidity: ${weatherData.humidity}%</p>
    <p>Wind: ${weatherData.wind}${units.speed}</p>
  `;

  document.body.appendChild(weatherDisplayElement);
}

export { displayWeatherData }