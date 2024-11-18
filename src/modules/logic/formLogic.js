function handleFormSubmit(event, callback) {
  debugger
  event.preventDefault(); // Prevent default form submission

  const weatherForm = document.querySelector("#weather-form");
  const cityInput = weatherForm.querySelector('input[type="text"]');
  debugger
  const unitToggle = weatherForm.querySelector('#unit-toggle');
  const unit = unitToggle.checked ? 'us' : 'metric'; // Toggle value for unit system

  if (!validateFormInput(cityInput.value)) {
    cityInput.setCustomValidity("You must enter a city");
    cityInput.reportValidity();
    return;
  } else {
    cityInput.setCustomValidity("");
  }

  // Call the callback function with the city and unit
  callback(cityInput.value, unit);
}

// Simple form validation
function validateFormInput(city) {
  return city.trim() !== ""; // Ensure city is not empty
}

// Function to add event listener to form
function addFormEventListener(form, callback) {
  form.addEventListener('submit', (event) => handleFormSubmit(event, callback));
}

// Add event listener to update the label text dynamically
function addToggleEventListener(form, callback) {
  form.querySelector('#unit-toggle').addEventListener('change', (event) => {
    handleFormSubmit(event, callback);
  });
}

// Function to reset the form (if needed)
function resetForm(form) {
  form.reset();
}

export { handleFormSubmit, addFormEventListener, addToggleEventListener, resetForm }