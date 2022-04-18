const sumAll = function(num1, num2) {
    if (typeof(num1) !== "number") {
        return "ERROR"
    } else if (typeof(num2) !== "number") {
        return "ERROR"
    } else if (num1 < 0) {
        return "ERROR"
    } else if (num2 < 0) {
        return "ERROR"
    } else if (num1 < num2) {
        let newSum = 0;
        for (let i = num1; i <= num2; i++) {
            newSum += i;
        }
        return newSum;
    } else if (num2 < num1) {
        let newSum = 0;
        
        for (let i = num2; i <= num1; i++) {
            newSum += i;
        }
        return newSum;
    }
};

// Do not edit below this line
module.exports = sumAll;

// Use if function to see which number is smaller and start for loop with that number
// Increment by one until second number is reached and add the number in each loop
// Return the final sum