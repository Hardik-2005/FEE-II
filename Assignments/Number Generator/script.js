function generateRandomNumber() {
    const minValue = parseInt(document.getElementById("min-value").value);
    const maxValue = parseInt(document.getElementById("max-value").value);

    if (isNaN(minValue) || isNaN(maxValue)) {
        alert("Please enter valid numbers for both minimum and maximum values.");
        return;
    }

    if (minValue > maxValue) {
        alert("Minimum value should be less than or equal to the maximum value.");
        return;
    }

    // Generate random number
    const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

    // Display generated number
    document.getElementById("random-number").textContent = `Random Number: ${randomNumber}`;

    // Log the generated number to history
    const historyList = document.getElementById("history-list");
    const listItem = document.createElement("li");
    listItem.textContent = randomNumber;
    historyList.appendChild(listItem);
}

// Reset history and output
function resetGenerator() {
    document.getElementById("random-number").textContent = "";
    document.getElementById("min-value").value = "";
    document.getElementById("max-value").value = "";

    const historyList = document.getElementById("history-list");
    historyList.innerHTML = "";
}
