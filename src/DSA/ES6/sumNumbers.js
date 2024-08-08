//Write your code below
const arr = [1, 2, 3, 4]
const sumNumber = (arr) => {
	return arr.reduce((accumulator, currentValue) => {
		return (accumulator + currentValue);
	}, 0);
}
console.log(sumNumber(arr));
