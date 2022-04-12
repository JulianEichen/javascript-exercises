const sumAll = function(x,y) {
    var start = 0;
    var end = 0;
    if (x<0 || y<0 || typeof(x)!='number' || typeof(y)!='number'){
        return 'ERROR';
    }
    if (x<y){
        start = x;
        end = y;
    }else{
        start = y;
        end = x;
    }

    for(var i =start+1; i<=end; i++){
        start+=i;
    }
    return start;
};

// Do not edit below this line
module.exports = sumAll;
