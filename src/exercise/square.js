for (i = 1; i <= 6; i++) {
	let row = '';
	let space = '';
	for (j = 0; j <= 8; j++) {
		if ((i % 2 != 0) && (j % 2 != 0)){
			row += ' ';
		} else if ((i % 2 != 0 ) &&  j % 2 == 0) {
			row += '#';
		} else if ((i % 2 == 0 ) &&  j % 2 == 0) {
			row += ' ';
		} else if ((i % 2 == 0) && j % 2 != 0) {
			row += '#';
		}
	}
	console.log(row);
}
