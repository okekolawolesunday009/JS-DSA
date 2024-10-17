function quickSort(array) {
	if (array.length < 2) return array;
	let pivotIndex = Math.floor(array.length / 2);
	let pivot = array[pivotIndex];
	console.log(pivot,array);

	let less = [];
	let greater = [];


	for (let i in array) {
		if (i != pivotIndex) {
			array[i] > pivot ? 
				greater.push(array[i]) :
				less.push(array[i]);
		}
	}
	return [...quickSort(less), pivot, ...quickSort(greater)];
}
console.log(quickSort([1, 20, 3, 14, 29, 34, 30]));
