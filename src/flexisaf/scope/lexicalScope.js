function outerFunc() {
	let outerVal = "outerValue";

	function innerFunction() {
		console.log(outerVal);
	}
	return innerFunction;
}

const innerFunc = outerFunc() 
innerFunc() //'outerValue'
