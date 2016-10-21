def isPalindrome(word):
	word = str(word)
	start = 0
	end = len(word) - 1

	while start < end:
		if word[start] != word[end]:
			return False
		start = start + 1
		end = end - 1

	return True

def findPalindrome():
	max = 0
	for a in range(999, 100, -1):
		for b in range(999, 100, -1):
			result = a * b
			if isPalindrome(result) and result > max:
				max = result

	return max

print findPalindrome()