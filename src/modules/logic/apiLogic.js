async function fetchData(encodedLocation, units) {
  try {
  const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodedLocation}?unitGroup=${units}&key=AFYYZK9DYGNYGLA8E8YV96H27&contentType=json`, {
    mode: 'cors',
    method: "GET"
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  const data = await response.json();
  return data;

  } catch (error) {
    console.log(`An error occurred: ${error.message}`);
    return { error: true, message: error.message };
  }
}

function processData(data) {
  // Extract necessary data & return it.
  const weatherData = {
    location: data.address,
    time: data.currentConditions.datetime,
    temperature: data.currentConditions.temp,
    conditions: data.currentConditions.conditions,
    description: data.description,
    humidity: data.currentConditions.humidity,
    wind: data.currentConditions.windspeed,
    sunrise: data.currentConditions.sunrise,
    sunset: data.currentConditions.sunset,
    icon: data.currentConditions.icon
  };

  return weatherData;
}

function urlEncodedString(string) {
  const encodedString = encodeURI(string);
  return encodedString;
}


export { fetchData, processData, urlEncodedString };