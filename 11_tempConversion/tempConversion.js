const convertToCelsius = function(temp) {
  let stringCelciusTemp = ((temp - 32) * (5 / 9)).toFixed(1);
  return parseFloat(stringCelciusTemp);
};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
