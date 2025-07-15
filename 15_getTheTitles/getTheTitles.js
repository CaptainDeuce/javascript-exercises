const getTheTitles = function(arr) {
    // let titleArr = [];
    // for (let item of arr) {
    //     titleArr.push(item.title);
    // }
    // return titleArr;

    return arr.map(item => item.title);
};

// Do not edit below this line
module.exports = getTheTitles;
