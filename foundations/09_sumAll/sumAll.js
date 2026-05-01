const sumAll = function(start, end) {
    let arr = [];

    for (let i = start; i <= end; i++) {
        arr.unshift(i);
    }

    const productOfArray = arr.reduce((total, currentItem) => {
        return total += currentItem;
    }, 0);

    return productOfArray;
};

// Do not edit below this line
module.exports = sumAll;
