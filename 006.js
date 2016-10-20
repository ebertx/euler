var _ = require('underscore');

function sumOfSquares(x) {
	var sum = 0;
	for(var i = 1; i <= x; i++) {
		sum += Math.pow(i, 2);
	}
	return sum;
}

function squareOfSum(x) {
	var sum = 0;
	for(var i = 1; i <= x; i++) {
		sum += i;
	}
	return Math.pow(sum, 2);
}

console.log(squareOfSum(100) - sumOfSquares(100));