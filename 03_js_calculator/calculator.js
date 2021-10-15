const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(numbers) {
  // let adding = 0;
  // for (let i = 0; i < numbers.length; i++) {
  //   adding += numbers[i];
  // }
  // return adding;
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  return numbers.reduce(reducer, 0); // 0 is the default
};


const multiply = function(numbers) {
  const multiplier = (previousValue, currentValue) => previousValue * currentValue;
  return numbers.reduce(multiplier);
};

const power = function(a, b) {
	const total = Math.pow(a,b);
  return total;
};

const factorial = function(number) {
   if (number == 0 || number == 1) {
      return 1;
   } else {
      return number * factorial(number - 1);
   }
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
