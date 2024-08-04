//Write a function removeDuplicates(arr) that
//takes an array as input and returns a 
//new array with all values from the 
//original array except duplicate values. 
//You should not modify the original array provided to the function.

function removeDuplicate(str) {
	var count = str.reduce((accumulator, currentValue) =>  {
		if (accumulator[currentValue]) accumulator[currentValue]++;
		else accumulator[currentValue] = 1;
		return accumulator;

	}, {});
	var newArr = []
	for (const key in count) {
		newArr.push(key)
	}
	console.log(newArr);


}
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const num = [1,2, 3,1, 3, 5,2];
removeDuplicate(num);
