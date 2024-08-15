const repeatString = function(string, count) {
    if (count < 0) {
        return "ERROR";
    }
    for (let index = 0; index <= count; index++) {
        return string.repeat(count);
    }
};

// Do not edit below this line
module.exports = repeatString;
