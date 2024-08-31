console.log("start");

setTimeout(function() {
  console.log("timeout");
}, 0);

Promise.resolve().then(function() {
 console.log("promise");
});

console.log("end");

// function result() {
// 	const output =[];
// 	output.push("start");

// 	return new Promise((res) => {
// 		setTimeout(function() {
// 			output.push("timeout");
// 			res(output);
		
// 	}, 0);

// 	 Promise.resolve().then(function() {
// 		output.push("promise");
// 	});

// 	output.push("end");
// 	});

// 	console.log(output);
// }
// result().then((output) => {
// 	console.log(`{${output}}`);
// });
