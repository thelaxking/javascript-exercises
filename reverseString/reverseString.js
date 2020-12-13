const reverseString = function(string) {
    let reverse = '';
    for (let i = string.length - 1; i > -1; i--) {
        reverse = reverse + string.substr(i,1);
    }
    return reverse
}

module.exports = reverseString