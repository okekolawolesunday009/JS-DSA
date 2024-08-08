//Write a function that takes an object representing 
//a person and destructures the object to extract the person's 
//name, age, and address. Then, use these variables to log a message that says:

 

//"The person's name is [name], they are [age] years old, and they live at [address]."

 

function printPersonInfo(person) {
	// Write your code below
    const {name, age, address} = person;
    if (name === undefined || age === undefined || address  === undefined) {
        //    if ((name && age && address ) === undefined) {
        return  "Missing required key-value pair(s)."

    } else {
        return `The person's name is ${name}, they are ${age} years old, and they live at ${address}.`

    }
}
