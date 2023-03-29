const palindromes = function (str) {
    let newStr = str.replace(/[^a-zA-Z]/g,'').toLowerCase();
    let arr = newStr.split("");
    let arrR = arr.slice();
    arrR = arrR.reverse();
    let rStr = arrR.join(""); 
    console.log(rStr, newStr)
    return rStr == newStr;
};

// Do not edit below this line
module.exports = palindromes;
