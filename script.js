//complete the given function
function isPalindrome(s) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Check if the string is the same forward and backward
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    if (s[i] !== s[j]) {
      return false;
    }
  }
  
  return true;
}
This function first converts the input string to lowercase and removes any non-alphanumeric characters using a regular expression. It then checks if the resulting string is a palindrome by iterating over the characters from both ends of the string and comparing them. If at any point the characters are different, the function returns false. If the loop completes without finding any differences, the function returns true.

For example, isPalindrome("race a car") would return false because the string "raceacar" is not a palindrome.









