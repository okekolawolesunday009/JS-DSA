//object
let person = {
  name: "John",
  age: 30,
  profession: "Developer"
};

//or
let person = new Object();
person.name = "John";
person.age = 30;
person.profession = "Developer";


//accessing
console.log(person.name);  // "John"
//adding
person.age = 31;
//updating
person.name = 'kolawole';

//deleting
delete person.age;


//object method
let person = {
  name: "John",
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

person.greet();  // "Hello, John"
