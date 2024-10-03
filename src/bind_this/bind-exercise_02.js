const obj1 = {
	name: 'John',
	sayHello() {
		console.log(`my name is ${this.name}`);
	}
};

const sayHelloToBob = obj1.sayHello.bind(obj1);

sayHelloToBob();
