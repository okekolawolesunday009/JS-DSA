//Below you will find 3 functions foo, bar and baz followed by the invocation of foo. Create a fourth function, result,  that returns an array of the strings that will be logged by the other 3 functions in the order they will be logged to the console.
const output= [];
function foo() {
	//console.log("foo");
	output.push("foo");
	bar();
	//console.log("baz");
	output.push("baz");
}

function bar() {
	//console.log("bar");
	output.push("bar");
	baz();
}

function baz() {
	//console.log("baz");
	output.push("baz");
}
foo();

const result = () => {
	return (output);
}
console.log(result());

