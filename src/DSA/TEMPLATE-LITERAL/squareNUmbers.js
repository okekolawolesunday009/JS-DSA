//Write a function in JavaScript that takes an 
//array of numbers and returns a new array containing
//a string  '[number] squared is [number squared]' 
//for each number in the original array using template literals.

function squareNumbers(numbers) {
	// Write your code herei
	var result = [];
	 const square = numbers.map((num) => {
		return `${num} squared is ${num * num}`;
	});
	return square;
	
}
console.log(squareNumbers([1,2,3]));
