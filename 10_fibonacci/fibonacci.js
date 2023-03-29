const fibonacci = function(x) {
    if(x <0){
        return "OOPS";
    }
    let y = parseInt(x);
    let sum = 0;
    if(y === 1) return 1;
    if(y === 2) return 1;
    arr = [1,1];
    for (let index = 0; index < y - 2; index++) {
        arr.push(arr[index]+ arr[index+1])
    }
    return arr.at(-1)

};

// Do not edit below this line
module.exports = fibonacci;
