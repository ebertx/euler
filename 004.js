var _ = require('underscore');

function isPalindrome(x) {
	if( Math.floor(x / 100000) == x % 10 && 
		Math.floor(x / 10000) % 10 == Math.floor(x / 10) % 10 &&
		Math.floor(x / 1000) % 10 == Math.floor(x / 100) % 10)
		return true;
	else
		return false;
}

// console.log(Math.floor(123456 / 100000) % 10 + " - " + Math.floor(123456 / 100) % 10);

var max = 0;
var p = 0;
for(var i = 100; i < 1000; i++) {
	for(var j = 100; j < 1000; j++) {
		p = i * j;
		if(p > max && isPalindrome(p)) {
			max = p;
			console.log(i + " * " + j + " = " + max);
		}
	}
}

