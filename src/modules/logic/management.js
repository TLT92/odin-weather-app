import { fetchData, processData, urlEncodedString } from './apiLogic.js';
import { displayWeatherData } from '../components/weatherComponent.js';
import { createForm } from '../components/formComponent.js'; 
import { addFormEventListener } from './formLogic.js';
import { displayErrorMessage } from '../components/errorComponent.js';
import { UNITS } from '../../config/constants.js';

async function getData(city, unitSystem) {
  const encodedCity = urlEncodedString(city);
  const fetchedData = await fetchData(encodedCity, unitSystem);
  return fetchedData;
}

// Function to fetch and display weather data.
async function fetchAndDisplayWeatherData(city = "London, UK", unitSystem = "metric") {
  const fetchedData = await fetchData(city, unitSystem);

  // Check if an error occurred.
  if (fetchedData.error) {
    displayErrorMessage(fetchedData.message);  // Display an error to the user
    return;
  }

  const processedData = processData(fetchedData);
  displayWeatherData(processedData, UNITS[unitSystem]);
}

// Function to create and display the form.
function createAndDisplayForm() {
  const userInputForm = createForm();
  const weatherForm = userInputForm.querySelector('form');

  // Add the event listener to handle form submission with desired function to execute with user input.
  addFormEventListener(weatherForm, fetchAndDisplayWeatherData);

  // Append the form to the DOM
  document.getElementById("content-wrapper").appendChild(userInputForm);
}

export { fetchAndDisplayWeatherData, createAndDisplayForm };