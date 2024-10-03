function cal(num) {
	var sum = 0;
	for (let i = 0; i < num.length; i++) {
		sum += num[i];
	}
	return sum;
}

//cal([1,2,3]);

function dis(num, dis) {
	const diss = num.map(num => num * 1 - dis);
	console.log(cal(diss));

}

const num = [1,2,3];
const disc = 0.1;
dis.call(num. disc);
