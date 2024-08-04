//Write a function removeDuplicates(arr) that
//takes an array as input and returns a 
//new array with all values from the 
//original array except duplicate values. 
//You should not modify the original array provided to the function.

function removeDuplicates(str) {
	var newArr = str.filter((item, index) => str.indexOf(item) === index);

	console.log(newArr);


}
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const num = [1,2, 3,1, 3, 5,2];
removeDuplicates(fruits);

