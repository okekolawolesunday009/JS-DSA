const obj1 = {
	name: 'John',
	sayHello() {
		console.log(`my name is ${this.name}`);
	}
};
const obj2 = {
	name: 'Bob'
}
const sayHelloToBob = obj1.sayHello.bind(obj2);
sayHelloToBob();
