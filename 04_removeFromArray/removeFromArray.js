const removeFromArray = function() {
    var args = Array.from(arguments);
    var inArray = args[0];
    var deletUs = args.slice(1);

    function deleteFilter(entry){
        return entry in deletUs;
    }

    var outArray = inArray.filter(deleteFilter);
    return outArray;
};

// Do not edit below this line
module.exports = removeFromArray;
