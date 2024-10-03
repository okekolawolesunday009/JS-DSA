s = "1 + 1"

var cal = function(s) {
	let stack = [];
	let currentNum = 0;
	let result = 0;
	let sign = 1;

	for (let i = 0; i < s.length; i++) {

		let char = s[i];

		if(!isNaN(char) && char !== ' ') {
			currentNum = currentNum * 10 + parseInt(char);
		} else if (char === '+') {
			result += sign * currentNum;
			currentNum = 0;
			sign = 1;
		} else if (char === '-') {
			result += sign * currentNum;
			currentNum = 0;
			sign = -1;
		} else if (char === '(') {
			stack.push(result);
			stack.push(sign);
			//set a new subexpression to zero
			result = 0;
			sign = 1;

		} else if (char === ')') {
			result += sign * currentNum;
			currentNum = 0;

			result *= stack.pop();
			result += stack.pop();
		}
	}

	result += sign * currentNum;
	return result;

};
var s = cal("1+2");
console.log(s);
