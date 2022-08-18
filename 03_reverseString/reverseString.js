const reverseString = function(string) {
    let splitString = string.split(''); //split string into array with indv letters
    let reverseArray = splitString.reverse(); //reverse the elements of the array
    let joinedArray = reverseArray.join(''); //join all elements of the array into reg string
    return joinedArray;
};

// Do not edit below this line
module.exports = reverseString;
