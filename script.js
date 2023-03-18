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








