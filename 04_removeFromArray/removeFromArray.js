const removeFromArray = function(input) {
    const args = Array.from(arguments);
    const original = args[0];
    let result = original;

    for(let i = 1; i <= args.length; ++i){
        let index = original.indexOf(args[i]);
        if(index > -1){
            result.splice(index, 1);
        }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
