//Write a function, addNewProperty, with 
//three parameters: object, propName and propValue. 
//The function should add a new key/value pair 
//where propName is the key and propValue is the 
//corresponding value. The function should return a boolean indicating that the property exists.

function addNewProperty(obj, propName, propValue) {
	// Write your code below
	if (typeof obj == 'object') {
		obj[propName] = propValue;			
		console.log(obj);
	}
	return obj.hasOwnProperty(propName);

  
  
} 
addNewProperty(
	{kola: 2, dare: 12},
	"dddff", 13
)
