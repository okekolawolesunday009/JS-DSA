/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
	var result = init;
	var array = [];
	//console.log(array);
	return {
		
		increment: function () {
			result +=  1;
			//console.log(array);
			array.push(result);
			return array
		},
		reset: function () {
			result =  init;
			array.push(result);
			//console.log(result);
			
			return array;
		},
		decrement: function() {
			result -=  1;
			
			array.push(result);
			return array
		//	array.push(result);
		}
		
	}

	//console.log(array);

};

const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
/* * counter.decrement(); // 4
 */
