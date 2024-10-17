function binarySearch (
	array, 
	target, 
	start=0, 
	end=array.length-1) {

	if (start > end) {
		return -1;
	}
	var mid = Math.floor((start + end) / 2);

	if (array[mid] === target) {
		return mid;
	} else if (array[mid] > target) {
		return binarySearch(array,target, start, mid - 1);
	} else {
		return binarySearch(array, target, mid + 1, end);
	}
}

const array = [1, 30, 40, 20, 34];
let start = 0;
let end = array.length - 1;
console.log(binarySearch(array, 30, start, end));




