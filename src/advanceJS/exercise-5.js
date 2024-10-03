function person(name, age)
{
   this.name = name;
   this.age = age;
}
// Create your prototypes below

person.prototype.addLang = function() {
	this.language = "language";
};

person.prototype.callValues = function() {
	return `${this.name} ${this.age} ${this.language}`;

};

const alice = new person("Alice", 30);
alice.addLang();
console.log(alice.callValues());

