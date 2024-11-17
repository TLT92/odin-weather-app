function displayErrorMessage(errorMessage) {
  // Remove the previous error message if it exists
  const existingError = document.querySelector("#error-message-element");
  if (existingError) {
    existingError.remove();
  }

  // Create and display the new error message
  const errorMessageElement = document.createElement("div");
  errorMessageElement.setAttribute("id", "error-message-element");
  errorMessageElement.textContent = `Error: ${errorMessage}. Most likely, the city you entered has not been found. Check spelling or try a different one!`;
  document.querySelector("#weather-container").appendChild(errorMessageElement);
}

export { displayErrorMessage };