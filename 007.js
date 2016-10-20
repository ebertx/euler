var _ = require('underscore');

function isPrime(x) {
	for(var i = 3; i < (x / 2); i += 2) {
		if(x % i == 0)
			return false;
	}
	return true;
}

var count = 10;
var i = 1;
while(count > 0) {
	if(isPrime(i)) {
		console.log("countdown: " + count + " -- " + i);
		count--;
	}
	i++;
}