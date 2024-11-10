document.getElementById("calculate-btn").addEventListener("click", () => {
    const itemCost = parseFloat(document.getElementById("item-cost").value);
    const taxRate = parseFloat(document.getElementById("tax-rate").value);
    const tipPercentage = parseFloat(document.getElementById("tip-percentage").value);

    if (isNaN(itemCost) || isNaN(taxRate) || isNaN(tipPercentage)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

    const taxAmount = (taxRate / 100) * itemCost;
    const tipAmount = (tipPercentage / 100) * itemCost;
    const totalAmount = itemCost + taxAmount + tipAmount;

    document.getElementById("tax-amount").textContent = `Tax: $${taxAmount.toFixed(2)}`;
    document.getElementById("tip-amount").textContent = `Tip: $${tipAmount.toFixed(2)}`;
    document.getElementById("total-amount").textContent = `Total Amount: $${totalAmount.toFixed(2)}`;
});
