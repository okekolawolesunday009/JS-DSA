let sym= Symbol("name");
console.log(sym == Symbol("name"));
const toStringSymbol = Symbol("toSting");
Array.prototype[toStringSymbol] = function() {
	return `${this.length} cm of yarn`;
}


console.log([1,2,3].toString());
console.log([1,2,3][toStringSymbol]());

