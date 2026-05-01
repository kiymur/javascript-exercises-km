const sumAll = function(a, b) {
    if (a < 0 || b < 0) return "ERROR";   

    let start;
    let end;
    if (a > b) {
        start = b;
        end = a;
    } else {
        start = a;
        end = b;
    }

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
