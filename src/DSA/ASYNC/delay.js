//Need help?

//Write a function called delay that will be passed an integer 
//value representing time in milliseconds and returns a Promise 
//that resolves after that amount of time.
// Hint: Research and use setTimeout() 
// to create the delay. When the promise resolves it should 
//
// return the string, "Times up!".


function delay(ms) {
	//Write your code below
	return new Promise(function(resolve, reject) {
		if (typeof ms == 'number') {
			setTimeout(() => resolve("Time Up"), ms);
		} else reject('noooo');
	});
}
console.log(delay(300));

