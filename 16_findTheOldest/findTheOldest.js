const findTheOldest = function(arr) {
    // let currentOldest = 0;
    // let oldest = arr.reduce((item) => {
    //     if ((item.yearOfDeath - item.yearOfBirth) < currentOldest) {
    //         return currentOldest;
    //     }
    // }, currentOldest);

    let oldest = {};
    let currentAge = 0;
    for (let i = 0; i < arr.length; i++) {
        let age = arr[i].yearOfDeath - arr[i].yearOfBirth;
        if (age >= currentAge) {
            currentAge = age;
            oldest = arr[i];
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
