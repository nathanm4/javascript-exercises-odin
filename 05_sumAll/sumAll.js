const sumAll = function(num1 ,  num2) {
    let x = num1;
    let y = num2;
    let sum = 0;

    for (let i = x; i <=y; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
