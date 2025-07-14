const palindromes = function (string) {
    let isPalindrome = true;
    let lowerNoSpaceNoPunctuation = string.toLowerCase().replaceAll(" ", "").replace(/[^a-zA-Z\s]/g, '');
    let stringArr = lowerNoSpaceNoPunctuation.split("");
    for (let i = 0; i < stringArr.length; i++) {
        if (stringArr[i] !== stringArr.reverse()[i]) {
            isPalindrome = false;
        }
    }
    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
