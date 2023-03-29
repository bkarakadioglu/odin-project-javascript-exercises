const sumAll = function(num1, num2) {
    if(typeof(num1) != "number" || typeof(num2) != "number" || num1 < 0 || num2 < 0 ){
        return "ERROR";
    }
    let sum = 0;
    let greaterNum = num2;
    let lesserNum = num1;
    if(num1 > num2){
        greaterNum = num1;
        lesserNum = num2;
    }
    for (let index = lesserNum; index < greaterNum+1; index++) {
        sum += index;
    }
    return sum;
};
// Do not edit below this line
module.exports = sumAll;
