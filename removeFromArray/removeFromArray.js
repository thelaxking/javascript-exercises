const removeFromArray = function(arry, ...args) {
    for (i = 1; i < arguments.length; i++) {
        let index = arry.indexOf(arguments[i]);
        if (index >= 0) {
            arry.splice(index, 1);
        }
    }
    return arry;
}

module.exports = removeFromArray