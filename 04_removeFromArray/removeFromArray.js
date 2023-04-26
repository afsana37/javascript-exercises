const removeFromArray = function(array, ...args) { 
    //REST OPERATOR 
    //The rest operator is used to put the rest of some user-supplied values into a JavaScript array.
    const newArray = [];

    array.forEach((item) => {
        if(!args.includes(item))
        newArray.push(item);
    });
    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
