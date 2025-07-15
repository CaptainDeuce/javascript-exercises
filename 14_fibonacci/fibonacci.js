const fibonacci = function(number) {
    let fibNumber = 1;
    if (number === 1 || number === 2) {return fibNumber}
    for (let i = 1; i < number; i++) {
        let j = 0;
        fibNumber = i + j;
        j++;
    }
    return fibNumber;
};

// Do not edit below this line
module.exports = fibonacci;
