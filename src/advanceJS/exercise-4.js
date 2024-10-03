const counterModule = (() => {
   // private variables and functions go here
	let counter = 0;
	const increment = () => counter + 1;

	const decrement = () => counter - 1;

	const getCount = () =>  counter;

  return {
	  increment,
	  decrement,
	  getCount

    // public methods go here
  };
})();

export default counterModule;
