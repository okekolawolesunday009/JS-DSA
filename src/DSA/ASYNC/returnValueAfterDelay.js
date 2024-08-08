
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

