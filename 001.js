var sum = 0;

for(var i = 0; i < 1000; i++) {
	if(i % 3 == 0 && i % 5 == 0) {
		console.log("Both: " + i);
		sum += i;
	}
	else {
		if(i % 3 == 0) {
			console.log("3: " + i);
			sum += i;
		}
		if(i % 5 == 0) {
			console.log("5: " + i);
			sum += i;
		}
	}
}

console.log("Sum: " + sum);