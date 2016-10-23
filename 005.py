def isDivisible(x):
	for i in range(2, 20):
		if x % i != 0:
			return False
	return True

number = 0
inc = 20

while(True):
	number += inc
	if isDivisible(number):
		print "Success!"
		print number
		break
