//Write a function sumOfNumbers(arr) that takes 
//an array 'arr' and adds them all together 
//using the  .reduce() method. If the array is empty 
//it should return 0;

function sumOfNumbers(arr) {
  //Add your code
    return arr.reduce(function(accumulator, currentValue) {
      return (accumulator + currentValue);

    }, 0);

}
console.log(sumOfNumbers([1, 2, 3]));
