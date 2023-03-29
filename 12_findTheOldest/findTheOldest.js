const findTheOldest = function(x) {
    let curYear = new Date().getFullYear();
    let oldestPerson = null;
    let oldestAge = 0;
    for (const iterator of x) {
        let age = 0;
        if(iterator.yearOfDeath != undefined){
            age = iterator.yearOfDeath - iterator.yearOfBirth;
        }else{
            age = curYear - iterator.yearOfBirth;
        }
        if (age > oldestAge) {
            oldestAge = age;
            oldestPerson = iterator;
        }
    }
    return oldestPerson;

};

// Do not edit below this line
module.exports = findTheOldest;
