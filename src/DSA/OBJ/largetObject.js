// obj : { a: 1, b: 2, c: 3, d: 2 }
// Write a function that takes an object 
// where the values are numbers and returns 
// the key with largest value using the for...in loop. 


function locateLargestKey(obj) {
	// Write your code below
	var arr = [];
	var largest;
	
	for (const key in obj) {
		arr.push(obj[key]);
	}
	var max = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > max) max = arr[i];
	}
	for (const key in obj) {
		if (obj[key] === max) largest = key;
	}
	return largest;
	

}
locateLargestKey({a: 1,b: 2, c: 3, d: 2});
