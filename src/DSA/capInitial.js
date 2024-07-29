// Write a function titleCase(str) that 
// takes a string as input 
// and returns the same string with the first 
// letter of each word capitalized

function cap(str) {
	var newString = str.split(' ');
	var result= [];
//	console.log(newString);
	newString.map(word => 
		result.push(word.charAt(0).toUpperCase() + word.slice(1))
	);
	//console.log(newString);
	console.log(`"${result.join(' ')}"`);
}
cap("hello game kola");
