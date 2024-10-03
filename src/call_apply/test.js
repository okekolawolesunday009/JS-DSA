function calculateTotal(numbers) {
    // Initialize a variable to store the total sum
    let total = 0;
    
    // Iterate through the array and add each number to the total
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    
    // Return the total sum
    return total;
}

function discountedTotal(numbers, discount) {
    // Apply the discount to each number in the array
    const discountedNumbers = numbers.map(number => number * (1 - discount));
    
    // Calculate the total of the discounted numbers
    return calculateTotal.call(this, discountedTotal); 
}

