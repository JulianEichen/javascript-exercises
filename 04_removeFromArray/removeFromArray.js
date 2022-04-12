const removeFromArray = function() {
    var args = Array.from(arguments);
    var inArray = args[0];
    var deleteUs = args.slice(1);

    function deleteFilter(entry){
        var check = true;
        if (deleteUs.indexOf(entry)>=0){
            check = false;
        }
        return check;
    }
    var outArray = inArray.filter(deleteFilter);
    return outArray;
};

// Do not edit below this line
module.exports = removeFromArray;
