function createAdder(startingNumber) {
  // Write your code below
	return number => number + startingNumber 

}

const add5 = createAdder(5);
console.log(add5(10)); // Should Output: 15

const add10 = createAdder(10);
console.log(add10(5)); // Should Output: 15
