class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");
killerRabbit.speak("gold");
Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth);
