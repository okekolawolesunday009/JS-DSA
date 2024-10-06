/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
	const resolve_1 = await promise1;
	const resolve_2 = await promise2;


	const add = resolve_1 + resolve_2;

	console.log(resolve_1, resolve_2, add);
	return add;
    
};


addTwoPromises(Promise.resolve(2), Promise.resolve(2))
	.then(console.log); // 4

