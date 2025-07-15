const findTheOldest = function(arr) {
    // let currentOldest = 0;
    // let oldest = arr.reduce((item) => {
    //     if ((item.yearOfDeath - item.yearOfBirth) < currentOldest) {
    //         return currentOldest;
    //     }
    // }, currentOldest);

    let oldest = {};
    let age = 0;
    let currentAge = 0;
    let currentDate = new Date();
    for (let i = 0; i < arr.length; i++) {
        if ("yearOfDeath" in arr[i]) {
            age = arr[i].yearOfDeath - arr[i].yearOfBirth;
        } else {
            age = currentDate.getFullYear() - arr[i].yearOfBirth;
        }
        if (age >= currentAge) {
            currentAge = age;
            oldest = arr[i];
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
