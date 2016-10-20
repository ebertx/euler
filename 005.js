var _ = require('underscore');

function isDivisible(x) {
	for(var i = 1; i <= 20; i++) {
		if(x % i != 0)
			return false;
	}
	return true;
}

var j = 20;
while(true) {
	if(isDivisible(j)) {
		console.log(j);
		return;
	}
	j++;
}