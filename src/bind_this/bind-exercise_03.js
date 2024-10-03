function multiply(a, b) {
	return a * b;
}

const double = multiply.bind(null, 2);
console.log(double(5));//this is called currying 
//using part of the myultiple function to create a partial funct
