const repeatString = function (string, num) {
    const add_s = string;
    if(num==0){
        return '';
    }
    if(num<0){
        return 'ERROR';
    }

    while (num > 1) {
        string += add_s;
        --num;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
