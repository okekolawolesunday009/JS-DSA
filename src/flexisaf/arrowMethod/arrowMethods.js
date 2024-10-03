//map array func
//
var squareArray = [2, 5, 10, 23];

var squared = squareArray.map((num) => {
	return num * 2;
})
//console.log(squared);i

// filter array func
//
var array = [10, 1, 2, 6, 9, 24, 5];

var filteredArray = array.filter((num) => {
	return (num % 2 === 0);

});
console.log(filteredArray)

//foreach method
//
var arrays = ['Bisi', 'shade', 'dare'];

arrays.forEach((names, index) {
	console.log(`${index}: ${names}`);
});

