function createForm () {
  const userInputForm = document.createElement("div");
  userInputForm.innerHTML = `
    <form id="weather-form">
      <input type="text" placeholder="Enter city" required>
      <label for="unit-select">Choose units:</label>
      <select id="unit-select" name="units">
        <option value="metric">Metric (°C, km)</option>
        <option value="us">Imperial (°F, miles)</option>
      </select>
      <button type="submit">Show weather</button>
    </form>
  `;

  return userInputForm;
};

export { createForm };