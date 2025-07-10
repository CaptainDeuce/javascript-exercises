const repeatString = function(string, num) {
    let value = "";
    if (num < 0) {
        value = "ERROR";
        return value;
    }
    for (let i = 0; i < num; i++) {
        value += string;
    }
    return value;
};

// Do not edit below this line
module.exports = repeatString;
