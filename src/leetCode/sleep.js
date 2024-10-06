/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
	return new Promise( function(res, rej) {
		setTimeout(() => res(), millis);
		
	})
    
}

 
let t = Date.now()
console.log(sleep(100).then(() => console.log(Date.now() - t))) // 100

