const palindromes = function(string) {
    let forward = string.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    let backward = forward.split('').reverse().join('');
    if (forward == backward) {
        return true;
    } else {
        return false;
    };
}

module.exports = palindromes
