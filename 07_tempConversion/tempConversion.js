const convertToCelsius = function(fahrenheit) {
  const fTemp = fahrenheit;
  const fToCel = (fTemp - 32) * 5 / 9;
  return fToCel;
};

const convertToFahrenheit = function(celsius) {
  const cTemp = celsius;
  const cToFahr = cTemp * 9 / 5 + 32;
  return cToFahr;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
