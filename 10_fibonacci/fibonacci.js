const fibonacci = function(num) {
    if (num <= 0){
        return "OOPS"
    }

    let current = 1;
    let last = 1;
    let dummy = 0;
    for(let i = 2; i<num; i++){
        dummy = current;
        current += last;
        last = dummy;
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
