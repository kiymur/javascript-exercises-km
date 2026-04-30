const removeFromArray = function(array, item) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== item) {
            newArray = newArray.concat(array[i]);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
