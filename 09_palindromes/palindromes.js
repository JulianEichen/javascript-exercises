const palindromes = function (text) {

    text = text.toUpperCase();
    
    // remove punctuation
    let text_split = text.split(".").join('');
    text_split = text_split.split(",").join('');
    text_split = text_split.split("!").join('');
    text_split = text_split.split("?").join('');
    text_split = text_split.split(" ").join('');

    // create reversed copy
    let text_rev = [...text_split];
    text_rev = text_rev.reverse().join('');
  
    if (text_split ==text_rev){
        return true;
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
