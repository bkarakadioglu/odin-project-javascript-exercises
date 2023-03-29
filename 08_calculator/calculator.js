const add = function(x,y) {
	return x+y
};

const subtract = function(x,y) {
	return x - y
};

const sum = function(x) {
  let sumVal = 0;
  for (const iterator of x) {
    sumVal += iterator;
  }
	return sumVal;
};

const multiply = function(x) {
  let sum = 1;
  for (const iterator of x) {
    sum *= iterator;
  }
	return sum;
}

const power = function(x,y) {
	return x ** y;
};

const factorial = function(x) {
  let sum = 1;
	for (let i = x; i > 0; i--) {
    sum *= i;    
  }
  return sum;
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
