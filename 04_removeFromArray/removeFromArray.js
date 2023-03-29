const removeFromArray = function(array, ...nmb) {
    for (let index = 0; index < nmb.length; index++) {
      const element = nmb[index];
       for (let i = 0; i < array.length; i++) {
            const arrElem = array[i];
            if(arrElem === element){
                array.splice(i,1)
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
