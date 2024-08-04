function map(array, transform) {
	let mapped = [];
	for (let element of array) {
		mapped.push(transform(element));
	} 
	return mapped;
}

var arr = [1, 2, 3, 4, 5]
var square = function(num) {
	return num * num ;
}

console.log(map(arr, (arr) => arr * 2));
