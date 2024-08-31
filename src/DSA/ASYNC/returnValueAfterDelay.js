//Write an asynchronous function main that is passed a person's 
//name as a string, age as an integer and delay as an integer in milliseconds.  
//The function should return a string "[name] is [age] years old." after a delay in milliseconds.

//Example:
//main('John Doe', 34, 500)
//should return 'John Doe is 34 years old.' with a delay of 500ms.

//Your function should utilize the returnValueAfterDelay function to create 
//a superficial delay before utilizing name and age arguments 
//to create the string to be returned.


function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
  
async function returnValueAfterDelay(ms, name) {
  await delay(ms);
  return name;
}

async function main(name, age, delay) {
  //Add your code below
	try {
		const d = await returnValueAfterDelay(delay, name);
		console.log(`${d} is ${age} years old`);
	} catch (error) {
		console.log(error); 
	}
  
}

main('John', 34, 500);

