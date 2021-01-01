const fibonacci = function (fibo) {
    let number = Number(fibo);
    if (number == NaN) {
        return "OOPS";
    } else if (number < 0) {
        return "OOPS";
    } else if (number == 1 || number == 2) {
        return 1;
    } else {
        let container = [1, 1];
        for (i = 3; i <= number; i++) {
            let next = container[i - 2] + container[i - 3];
            container.push(next);
        }
        return container[container.length - 1]
    }
}

module.exports = fibonacci
