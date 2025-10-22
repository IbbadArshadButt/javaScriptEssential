// Core function to calculate the total amount
// This function accepts the amounts as parameters, fulfilling the specific requirement.
/**
 * Calculates the sum of all grocery amounts.
 * @param {number} amount1 - Amount of the first grocery item.
 * @param {number} amount2 - Amount of the second grocery item.
 * @param {number} amount3 - Amount of the third grocery item.
 * @returns {number} The total expenditure.
 */
function groceryTracker(amount1, amount2, amount3) {
    // Check if inputs are valid numbers before summing
    const total = (amount1 || 0) + (amount2 || 0) + (amount3 || 0);
    return total;
}

// Function called by the button to gather inputs and initiate the calculation
function calculateTotal() {
    // 1. Get string values from input fields
    const input1 = document.getElementById('grocery1').value;
    const input2 = document.getElementById('grocery2').value;
    const input3 = document.getElementById('grocery3').value;

    // 2. Convert input strings to floating-point numbers.
    // If conversion results in NaN (e.g., input is empty or non-numeric), default to 0.
    const amount1 = parseFloat(input1) || 0;
    const amount2 = parseFloat(input2) || 0;
    const amount3 = parseFloat(input3) || 0;

    // 3. Call the core groceryTracker function with the parsed numbers
    const totalAmount = groceryTracker(amount1, amount2, amount3);

    // 4. Update the display element
    const resultElement = document.getElementById('totalResult');
    resultElement.innerHTML = `
        <span class="font-semibold text-gray-700">Total Expenditure:</span>
        <span class="text-3xl font-bold text-indigo-600 ml-2">$${totalAmount.toFixed(2)}</span>
    `;

    // Optional: Clear the input fields after calculation for fresh entry
    // document.getElementById('grocery1').value = '';
    // document.getElementById('grocery2').value = '';
    // document.getElementById('grocery3').value = '';
}