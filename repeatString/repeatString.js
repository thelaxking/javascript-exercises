const repeatString = function(string, times) {
    let runCount = 1;
    let newString = string;
    if (times == runCount) {
        return newString;
    } else if (times == 0) {
        return '';
    } else if (times < 0) return 'ERROR'
    while (runCount < times) {
        newString = newString + string;
        runCount += 1;
    }
    return newString;
}

module.exports = repeatString