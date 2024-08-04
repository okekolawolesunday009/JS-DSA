//Destructuring an array with a square baracket;

const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log(a, b);

//Destructuring an object with curly bracket;

const person = { name: "John", age: 30};
const {name, age} = person;
console.log(name);
console.log(age);


//Destructuring with rest parameter
const others = [1, 2, 3, 4, 5, 6];
const [first, second, ...rest] = others;
console.log(first);
console.log(second);
console.log(rest);


//Destructuring nested object
const person = {
	name: 'Alice',
	age: 30,
	occupation: {
		title: "Developer',
		years: 3,
	}
}
const {name, age, occupation: {title, years}} = person;
console.log(title);
console.log(name);


