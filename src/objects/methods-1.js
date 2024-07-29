let rabbit = {};
rabbit.speak = function(line) {
	console.log(`The rabbit says ${line}`);
};

//rabbit.speak("I'm alive");
//console.log(rabbit);i

function speak(line) {
	console.log(`The ${this.type} rabbit  says '${line}'`);
};
let ham = {type: "white", speak};
let sam = {type: "black", speak};

speak.call(ham, "jump");
sam.speak("fly");
