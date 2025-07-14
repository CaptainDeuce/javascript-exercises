const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let sum = 0;
  for (let element of arr) {
    sum += element;
  }
  return sum;
};

const multiply = function(arr) {
  let multiplySum = 1;
  for (let element of arr) {
    multiplySum *= element;
  }
  return multiplySum;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	let factorialSum = 1;
  for (let i = 0; i < a; i++) {
    factorialSum *= (a - i);
  }
  return factorialSum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
