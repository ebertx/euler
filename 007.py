from helpers import *

count = 6
number = 13

while count < 10001:
	number = number + 2
	if isPrime(number):
		count += 1
		print count,
		print ": ",
		print number

