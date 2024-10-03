/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
	let mapped = []
	
	for (let  i = 0; i < arr.length; i++) {
		mapped.push(fn(arr[i], i));
		
	}
	return mapped;
    
};
const arr = [10,20,30];
const fn = function constant() { return 42; };
//const fn = function plusI(n) { return n + 1; }
console.log(map(arr, fn));
