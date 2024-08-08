//Write a function called largestNumbers that takes any number of arrays as arguments, and returns an array of the largest numbers from each input array. Use the spread operator to make it possible to pass any number of arrays as arguments. For example your function should be able to handle the following calls:

 

//largestNumbers([ 4, 5, 6 ]);                                                  // should return [ 6 ]

//largestNumbers([ 1, 7, 8 ] , [ 5, 9, 10 ], [ 56, 6, 92 ]);       // should return [ 8, 10, 92 ]
const largestNumbers = (...arr1) => {
	return arr1.map(arr1 => {

		let arr_first = arr1[0];
		for (let i = 1; i < arr1.length; i++) {
			if (arr1[i] > arr_first) arr_first = arr1[i]
		
		}
		return arr_first;
	});
}
console.log(largestNumbers([1, 4, 3, 6], [2,4], [4, 6, 9]));
