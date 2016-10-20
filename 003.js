var _ = require('underscore');

function isPrime(x) {
	for(var i = 2; i < x; i++) {
		if(x % i == 0)
			return false;
	}
	return true;
}

for(var j = 2; j < 600851475143; j++) {
	if(600851475143 % j == 0) {
		console.log(j);
		if(isPrime(j))
			console.log("********** prime factor: " + j);
	}
}