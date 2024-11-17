// Define units for metric and imperial systems
const UNITS = {
  us: {
    temperature: '°F',
    length: 'mi',  // Miles for distance
    speed: 'mph',  // Miles per hour
    pressure: 'inHg', // Inches of mercury for pressure
  },
  metric: {
    temperature: '°C',
    length: 'km',  // Kilometers for distance
    speed: 'km/h',  // Kilometers per hour
    pressure: 'hPa', // Hectopascals for pressure
  },
};

// Optionally, if needed, you could define default units based on region
export { UNITS };  // Default unit system (can be 'imperial' or 'metric')