const removeFromArray = function(array) {
    let newArray = [];
    for (const arrItem of array) {
        let same = false;
        for (const argItem of arguments) {
            if (arrItem === argItem) {
                same = true;
            }
        }
        if (same === false) {
            newArray.push(arrItem);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
