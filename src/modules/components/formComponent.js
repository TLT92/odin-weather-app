function createForm() {
  const userInputForm = document.createElement("div");
  userInputForm.setAttribute("id", "form-wrapper");
  userInputForm.innerHTML = `
    <form id="weather-form">
      <input type="text" placeholder="Enter city" required>
      <div class="toggle-container">
          <div class="unit-label">
            <span id="unit-label-text">Metric</span>
          </div>
          <label class="switch">
            <input type="checkbox" id="unit-toggle">
            <span class="slider"></span>
          </label>
          <div class="unit-label">
            <span id="unit-label-text">Imperial</span>
          </div>
      </div>
      <button type="submit">Show weather</button>
    </form>
  `;

  return userInputForm;
}

export { createForm };