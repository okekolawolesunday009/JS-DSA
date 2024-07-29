let protoRabbit = { 
	speak(line) {
		console.log(`the ${this.type} rabbit says ${line}`);
	}
}

function makeRabbit(type){
	let rabbit = Object.create(protoRabbit);
	rabbit.type = type;
	return rabbit;
}

const whiteRabbit =  makeRabbit("white");
whiteRabbit.speak("jump");


//using prototype;

function Rabbit (type){
	this.type = type;
}
Rabbit.prototype.speak = function (line) {
	console.log(`The ${this.type} rabbit says ${line}`);
};
let wierldRabbit = new Rabbit("weird");
wierldRabbit.speak("gold2")
