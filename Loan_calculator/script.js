document.getElementById('calculateBtn').addEventListener('click', calculateLoan);

function calculateLoan() {
    // Get input values
    const loanAmount = parseFloat(document.getElementById("loanAmountInput").value);
    const interestRate = parseFloat(document.getElementById("inteRestInput").value);
    const loanTerm = parseFloat(document.getElementById("loanTermInput").value);

    // Validate inputs
    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
        alert("Please enter valid numbers for all fields.");
        return; // Prevent further execution if inputs are invalid
    }

    // Calculate monthly interest rate and total payments
    const monthlyInterest = interestRate / 100 / 12;
    const totalPayments = loanTerm * 12; // Convert years to months

    // Calculate monthly payment
    const monthlyPayment = (loanAmount * monthlyInterest) / (1 - Math.pow(1 + monthlyInterest, -totalPayments));

    // Calculate total interest
    const totalInterest = (monthlyPayment * totalPayments) - loanAmount;

    // Display results
    displayResult(monthlyPayment, totalInterest);
}

function displayResult(monthlyPayment, totalInterest) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p><strong>Monthly Payment: ${monthlyPayment.toFixed(2)}</strong></p>
        <p><strong>Total Interest: ${totalInterest.toFixed(2)}</strong></p>
    `;
}
