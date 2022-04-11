const reverseString = function(string) {
    let i = string.length;
    let reverseString = '';

    while (i>0){
        reverseString += string[i-1]
        i--;
    }
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
