const tax = (() => {
	let taxRate = 0.1;

	const setTaxRate = (newTaxRate) => {
		taxRate = newTaxRate;
		return taxRate;

	};

	const calculateTax = (amount) => {
		var res = amount * taxRate;
		return res.toFixed();

	};

	return {
		calculateTax,
		setTaxRate
	};
})();

// would normally be exported as follows: module.exports = tax;
//
export default tax;
