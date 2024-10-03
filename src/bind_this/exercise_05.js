const person = {
  name: "John",
  age: 30,
  greet: function (message) {
    return (`${message}, my name is ${this.name} and I am ${this.age} years old.`);
  },
};

const anotherPerson = {
	name: "Jane",
	age: 25
}

const boundGreet = person.greet.bind(anotherPerson);
console.log(boundGreet("Hello"));
