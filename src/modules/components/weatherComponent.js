function displayWeatherData(weatherData, units) {
  const weatherDisplayElement = document.querySelector("#weather-container");
  weatherDisplayElement.innerHTML = `
    <div id="weather-location-container">
      <p id="weather-location">${weatherData.location}</p>
    </div>
    <div id="weather-temperature-container">
      <p id="weather-temperature">${weatherData.temperature} ${units.temperature}</p>
    </div>
    <div id="weather-conditions-and-icon-container">
      <p id="weather-conditions">${weatherData.conditions}</p>
      <img id="weather-icon" src=${weatherData.icon} alt="weather icon"/>
    </div>
    <div id="weather-forecast-container">
      <p id="weather-forecast">${weatherData.forecast}</p>
    </div>
    <div id="weather-wind-container">
      <p id="weather-wind">Wind: ${weatherData.wind} ${units.speed}</p>
    </div>
  `;

  document.body.appendChild(weatherDisplayElement);
}

export { displayWeatherData }