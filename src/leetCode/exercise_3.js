/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: function(expect) {
            if (val && val === expect) return {"value": true}
            else return ({"error": "Not Equal"})//or use thre new Error
        },
        notToBe:  function(expect) {
            if (val && val !== expect) return {"Error": "Not Equal"}
            else return ({"value": "true"})
        }
    }
};


//console.log( expect(5).toBe(5)); // true
console.log(expect(5).notToBe(5)); // throws "Equal"
 
