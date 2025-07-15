const fibonacci = function(number) {
    let fibNumber = 0;
    if (number === 1 || number === 2) {return 1}
    if (number < 0) {return "OOPS"}

    let current = 1;
    let previous = 1;
    for (let i = 3; i <= number; i++) {
        fibNumber = current + previous;
        previous = current;
        current = fibNumber;
    }
    return fibNumber;
};

// Do not edit below this line
module.exports = fibonacci;
