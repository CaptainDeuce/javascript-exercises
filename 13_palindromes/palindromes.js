const palindromes = function (string) {
    let isPalindrome = false;
    let stringArr = string.split("");
    if (stringArr === stringArr.reverse()) {
        isPalindrome = true;
    }
    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
