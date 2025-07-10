const convertToCelsius = function(temp) {
  let stringCelciusTemp = ((temp - 32) * (5 / 9)).toFixed(1);
  return parseFloat(stringCelciusTemp);
};

const convertToFahrenheit = function(temp) {
  let stringFahrenheitTemp = (temp * (9/5) + 32).toFixed(1);
  return parseFloat(stringFahrenheitTemp);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
