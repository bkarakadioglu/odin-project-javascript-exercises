const repeatString = function(word, nmb) {
    var str = '';
    for (let index = 0; index < nmb; index++) {
        str += word;
    }  
    if (nmb < 0) {
        return "ERROR";
    }
    return str;
};
// Do not edit below this line
module.exports = repeatString;
