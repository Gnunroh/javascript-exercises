const removeFromArray = function(array, ...removals) {
    // Loop through array containing rest of the parameters
    const A = array;
    const B = removals;
    return A.filter(n => !B.includes(n));

    // To remove on array item based on its name: array.splice(array.indexOf(itemname), 1)
};

// Do not edit below this line
module.exports = removeFromArray;
