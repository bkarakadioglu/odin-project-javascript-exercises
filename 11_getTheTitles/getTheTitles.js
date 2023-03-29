const getTheTitles = function(x) {
    //return x.reduce((total, elem) => {total.push(elem.title); return total;} ,[])
    return x.map(elem => elem.title);
};

// Do not edit below this line
module.exports = getTheTitles;
