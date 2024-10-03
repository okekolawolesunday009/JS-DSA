/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
	    let result = x;
	    if (functions.length <= 0) {
		    return result;
	    }
	    for(let i = functions.length - 1 ; i >= 0; i--) {
		    result = functions[i](result);
		   //console.log(functions[i].compose);
	    }
	    return result;
        
    }
};


//const fn = compose([x => x + 1, x => 2 * x])
const fn = compose([]);
console.log(fn(4)) // 9

