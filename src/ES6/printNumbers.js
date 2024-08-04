function printNumbers(arr) {
  // Write your code below
  //  const allNumbers = arr.every(value => typeof value === 'number');
  if (Array.isArray(arr) && (arr.length >= 2)) {
	  const allNumbers = arr.every(
		  value => typeof value === 'number');
	  if (allNumbers) {
		  const [first, second] = arr;
		  return (`The first two numbers are ${first} and ${second}.`);
	  } else {
		  return "The arguments provided are invalid.";
	  }
  } else {
	  return "The arguments provided are invalid.";

  }
}
const arr = [];
console.log(printNumbers(arr));
console.log(arr.length);
