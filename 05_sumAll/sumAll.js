const sumAll = function(num1, num2) {
    if (typeof(num1) !== 'number' || typeof(num2) !== 'number'
    || num1 < 0 || num2 < 0
    || num1 % 1 !== 0 || num2 % 1 !== 0) {
        return 'ERROR';
    }
    let sum = 0;
    let start;
    let end;
    if (num1 < num2) {
        start = num1;
        end = num2;
    } else {
        start = num2;
        end = num1;
    }
    for (let i = start; i < end + 1; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
