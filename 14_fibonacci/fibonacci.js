const fibonacci = function(number) {
    let actualNumber = Number(number);
    let fibNumber = 0;
    if (actualNumber === 1 || actualNumber === 2) {return 1}
    if (actualNumber < 0) {return "OOPS"}

    let current = 1;
    let previous = 1;
    for (let i = 3; i <= actualNumber; i++) {
        fibNumber = current + previous;
        previous = current;
        current = fibNumber;
    }
    return fibNumber;
};

// Do not edit below this line
module.exports = fibonacci;
