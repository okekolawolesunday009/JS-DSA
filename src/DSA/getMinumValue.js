
const arrayNum = [1, 13, 20, 24, 10, 98, 5];
var least = arrayNum[0]; 
for (i = 1; i < arrayNum['length']; i++) {
	if ( arrayNum[i] < least ) {
		least = arrayNum[i];
	}
};
console.log(least);
