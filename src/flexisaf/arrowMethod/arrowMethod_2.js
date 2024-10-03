//reducers
//
function reduce(array, combine, start) {
	let current = start;
	for (let element of array) {
		current = combine(current, element);
	}
	return current;

}

console.log(reduce([1, 2, 4], (a, b) => a + b, 0));

//splice
//
const fruits = ['apple', 'banana', 'mango', 'cherry'];

const removed = fruits.splice(1, 2);
console.log(removed);//'banana', 'mango'

// splcie add

//const fruits = ['apple', 'banana', 'mango', 'cherry'];
const add = fruits.splice(1, 0, 'orange');
console.log(add);
//add from index 1d


//splice replace

//const fruits = ['apple', 'banana', 'mango', 'cherry'];

const replace = fruits.splice(1, 1, 'pineapple');
console.log(replace);




