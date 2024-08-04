let protoRabbit = { 
	speak(line) {
		console.log(line)
	}
}

let killerRabbit = Object.create(protoRabbit);
console.log(killerRabbit);

killerRabbit.speak(2);
