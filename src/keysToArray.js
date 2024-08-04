//Write a function that takes an object and returns an array of all the keys in the object using a for...in loop.


function keysToArray(obj) {
	var arr = [];
	for (const key in obj) {
		arr.push(key);
	}	
	return arr;
}
var obj = {
	name: "ola",
	age: 24
}
keysToArray(obj);

