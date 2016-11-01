for a in range(1,500):
	for b in range(a,500):
		for c in range(b,500):
			left = a**2 + b**2
			right = c**2
			if left == right:
				result = a + b + c
				if result == 1000:
					print a,
					print ", ",
					print b,
					print ", ",
					print c,
					print " - ",
					print a*b*c