const sumAll = function(a, b) {
    let sum = 0;
    let smaller = null;
    let larger = null;

    if (a < b) {
        smaller = a;
        larger = b;
    } else {
        smaller = b;
        larger = a;
    }

    if (a < 0 || b < 0) {
        return 'ERROR';
    } else if ((typeof a) != "number" || (typeof b) != "number") {
        return 'ERROR';
    } else {
        for (i = smaller; i <= larger; i++) {
            sum += i;
        }
        return sum;
    }
}

module.exports = sumAll