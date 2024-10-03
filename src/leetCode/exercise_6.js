/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let mapped = [];
    for (let i = 0; i < arr.length; i++) {

        if (fn(arr[i], i)) {
            mapped.push(arr[i])
        }

    }


    return mapped
    
};
let fn = function firstIndex(n, i) { return i === 0; };
//let arr = [-2,-1,0,1,2];
let arr = [1,2,3];
console.log(filter(arr, fn));
