function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function sum(array) {
	let summ = array.reduce(function (a, b) {
		return a + b;
	}, 0);
	return summ
}

function multiply(array) {
	let sum = 1;
	for (let i = 0; i < array.length; i++) {
		sum = sum * array[i];
	}
	return sum;
}

function power(a, b) {
	return Math.pow(a, b);
}

function factorial(a) {
	let sum = 1;
	if (a == 1) {
		return sum;
	} else if (a < 1) {
		return sum;
	} else {
		for (i = a; i >= 1; i--) {
			sum = sum * i;
		}
		return sum;
	};
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
}