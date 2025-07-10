const reverseString = function(string) {
    let stringArray = Array.from(string);
    return stringArray
            .reverse()
            .join("");
};

// Do not edit below this line
module.exports = reverseString;
