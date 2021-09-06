# LeetCode-CodeWars


##DifferenceEvenness - the task was to find out which one of the given numbers differs from the others.
#Examples:
iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even
#I created two array's y and z, and started used .push() method + %2 trick, and then compared their lengths

##EqualSidesOfAnArray - to find if two sides of an array are equal.
#Examples:
Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array,
the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

#i Used a reduce() method to return the sum of all elements then created a function that compares two sides one by one.

##ReverseInteger- Given a signed 32-bit integer x, return x with its digits reversed.
If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

#used method such as toString() to turn the element into a string, split() the string, reverse() the string, and then join().
used parsefloat() because it gets rid of a all the zeros, Integer() doesnt do that.
*math.sign() to add a sign.

##isPallindrome - An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

#created turned x into an array, then created a new array and made into to go backwards.
turned a new array into an int, and compared with a function paremetr.

