// a function that returns a palindrome

function  isPalindrome(str) {
	let rev = str.split('').reverse().join('');
	if (str === rev) {
		return true;
	} else {
		return false;
	}
}
isPalindrome("lawal");
