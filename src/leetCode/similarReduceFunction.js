/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
	var current = init;
	if (nums.length === 0) return init;
	else {
		for (let i = 0; i < nums.length; i++) {
			current =  fn(current, nums[i]);
			//console.log(i, nums[i]);
		}

		return current;
		

	}
    
};

let nums = [1, 2, 3, 4];
let fn = function sum(accum, curr) { return accum + curr * curr;};
let init = 100;

console.log(reduce(nums, fn, init));
