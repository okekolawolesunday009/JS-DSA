
function square (n) {
	let local  = n;
	return () => local;
}
let wrap = square(3);
console.log(wrap());

function multiplier(factor) {
	return number => number * factor;
}
let twice = multiplier(2);
console.log(twice(5));
