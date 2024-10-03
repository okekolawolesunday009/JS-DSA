const person = {
	name: 'John',
	sayHello: function() {
		console.log(`Hello, my name is ${this.name}`);
	}
};
person.sayHello()//from inside a method
