const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(input_arr) {
  return input_arr.reduce((total,number) => {
    return total + number;
  }, 0)
};

const multiply = function(input_arr) {
  return input_arr.reduce((product,number) => {
    return product * number;
  },1)

};

const power = function(bs,pwr) {
  let prod = 1;
	for (let i=0;i<pwr;i++){
    prod *= bs;
  }
  return prod;
};

const factorial = function(a) {
	let prod = 1;
  for (let i=1; i<a+1; i++){
    prod *= i;
  }
  return prod;
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
