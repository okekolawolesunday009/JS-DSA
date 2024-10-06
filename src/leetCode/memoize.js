/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
	const cache = {};

	return function(...args) {
		const key = JSON.stringify([args].sort());
		// console.log(key);

		if (key in cache) {
			return cache[key];
		}
		// console.log(cache);
			const result = fn(...args);
			cache[key] = result;
			return result;


    
	    }
        
}


 
let callCount = 0;
const memoizedFn = memoize(function (a, b) {
	 callCount += 1;
   return a + b;
})
console.log(memoizedFn(3, 2)); // 5
console.log(memoizedFn(3, 2)) // 5
console.log(callCount) // 1 

