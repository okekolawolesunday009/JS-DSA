//function or local scope
//
function  myFunc () {
	let localScope = "I am in week one";
	console.log(localScope);
}
myFunc();

console.log(localScope); //Error : is not defined
