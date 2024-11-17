function handleFormSubmit(event, callback) {
  event.preventDefault(); // Prevent default form submission (page reload)

  const weatherForm = event.target;
  const city = weatherForm.querySelector('input[type="text"]').value;
  const unit = weatherForm.querySelector('select[name="units"]').value;

  if (!validateFormInput(city)) {
    alert("City name is required!");
    return;
  }

  // Call the callback function passed from management.js
  callback(city, unit); // Execute the callback (fetch and display weather data)
}

// Simple form validation
function validateFormInput(city) {
  return city.trim() !== ""; // Ensure city is not empty
}

// Function to add event listener to form
function addFormEventListener(form, callback) {
  form.addEventListener('submit', (event) => handleFormSubmit(event, callback));
}

// Function to reset the form (if needed)
function resetForm(form) {
  form.reset();
}

export { handleFormSubmit, addFormEventListener, resetForm }