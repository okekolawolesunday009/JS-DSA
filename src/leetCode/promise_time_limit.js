/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
    return async function(...args) {


        return new Promise((res, rej) => {
            const timeOut = new Promise((_, rej) => {
            
                setTimeout(() => rej("Time Limit Exceeded"), t)
     
              
             })

             const timeResolve = fn(...args)

             Promise.race([timeResolve, timeOut])
             .then(res)
             .catch(rej)
        })

        
    }
};

const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
console.log(limited(150).catch(console.log)) // "Time Limit Exceeded" at t=100ms
