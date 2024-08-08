//Write a function that takes in an array of numbers 
//and returns an array with only the unique 
//values using the new Set() met

function uniqueValues(arr) {
	// Write your code here
	var newArr = arr.filter(
		(num, index) => arr.indexOf(num) === index);   
	console.log(newArr);
}

uniqueValues([1, 2, 3, 2, 4, 3, 5]);

