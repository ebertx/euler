def sumOfSquares(x):
	sum = 0
	for i in range(1, x + 1):
		sum = sum + i**2
	return sum

def squareOfSum(x):
	sum = 0
	for i in range(1, x + 1):
		sum = sum + i
	return sum**2

print squareOfSum(100) - sumOfSquares(100)