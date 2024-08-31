//Create a function that returns true if the number is 
//an even number and false if it is an odd number and 
//assign this function to the variable callback on line 1 below.

 

//Then write a function filterEvens that accepts two arguments. 
//The first argument passed will be an array of integers.
 //The second argument will be your callback function that you created above. 
 //Your filterEvens function should return an array of only
 // the even numbers and should use your callback function 
 //to decide if the numbers that  you are iterating over are even.

 
let callback = function(num) {
	return num % 2 === 0;
}
//console.log(callback(2));



function filterEvens(array, callback) {
	//Write your code below
	//var arr = [];
	//array.forEach((x) => {
	//	if (callback(x)) arr.push(x);	
	//});
	
	//return arr;   
	return array.filter(callback);
}
const array = [1, 2, 3, 4, 4, 8, 5, 6];
console.log(filterEvens(array, callback));
