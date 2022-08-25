// add, subtract, get the sum, multiply, get the power, and find the factorial


const add = function(a , b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
    let sum = 0;
    for (let i in a) {
        sum+= a[i];
    }
    return sum;
};

const multiply = function(a) {
    let product = 1;
    for (let i in a) {
        product*= a[i];
    }
    return product;
};

const power = function() {
	
};

const factorial = function() {
	
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
