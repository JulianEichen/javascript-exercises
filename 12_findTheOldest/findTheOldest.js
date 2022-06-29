const findTheOldest = function (arr) {
    var sorted = arr.sort(function (obj1, obj2) {
        yob1 = obj1.yearOfBirth;
        yob2 = obj2.yearOfBirth;

        if (obj1.hasOwnProperty('yearOfDeath')) {
            yod1 = obj1.yearOfDeath;
        } else {
            yod1 = new Date().getFullYear();
        }

        if (obj2.hasOwnProperty('yearOfDeath')) {
            yod2 = obj2.yearOfDeath;
        } else {
            yod2 = new Date().getFullYear();
        }

        if (yod1 - yob1 > yod2 - yob2) {
            return -1;
        } else {
            return 1;
        }
    });

    return sorted[0];

    
};

// Do not edit below this line
module.exports = findTheOldest;
