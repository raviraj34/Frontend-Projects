document.getElementById("incrementBtn").addEventListener("click", incrementCounter);

document.getElementById("decrementnBtn").addEventListener("click", decrementnCounter);

document.getElementById("resetBtn").addEventListener("click", resetCounter);

let counterDisplay = document.getElementById("counterDisplay");
let counterVlaue = 0;

function updateCounterDisplay() {
    counterDisplay.textContent = counterVlaue;

}

function incrementCounter() {
    counterVlaue++;
    updateCounterDisplay();

}

function decrementnCounter() {
    if (counterVlaue > 0) {
        counterVlaue--;

    }
    updateCounterDisplay();
}


function resetCounter() {
    counterVlaue = 0;
    updateCounterDisplay();
}