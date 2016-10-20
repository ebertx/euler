number = 600851475143

while True:
	if number % 2 == 0:
		number = number / 2
	elif number % 3 == 0:
		number = number / 3
	else:
		prev = number
		div = 4
		while div < number:
			if number % div == 0:
				number = number / div
				break
			div = div + 1
		if prev == number:
			print number
			break