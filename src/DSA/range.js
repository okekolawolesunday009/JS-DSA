function sumNumber(a, b, step) {
	var sum = 0;
	var sumRange = [];
	if (step > 0) {
		for (let x = a; x <= b; x += step) {
			sumRange.push(x);
			sum += x;
		}
	} else {
		for (let x = a; x <= b; x++) {
			sumRange.push(x);
			sum += x;
		}
	}
	console.log(sum);
	console.log(sumRange);
		
}
sumNumber(1, 4);
