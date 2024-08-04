function filter(array, test) {
	let passed = [];
	for (let element of array) {
		if (test(element)) {
			passed.push(element);
		}
	}
	return passed;
}
var arr = [1, 2, 3, 4, 5];
var isEven = function(num) {
	return num % 2 === 0;
}
console.log(filter(arr, (arr) => arr % 2 === 0));
