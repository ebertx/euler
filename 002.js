var _ = require('underscore');

var sum = 2;
var fib = [1, 2];

while(true) {
	fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
	if(_.last(fib) > 4000000)
		break;
	if(_.last(fib) % 2 == 0)
		sum += _.last(fib);
}

console.log("Array: " + fib);
console.log("Sum: " + sum);