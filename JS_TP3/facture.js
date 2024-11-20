function calculateResults() {

    const rows = document.querySelectorAll('tbody tr');
    let grandTotal = 0; 

    rows.forEach((row, index) => {
        const priceInput = row.querySelector('input[name="t2"]');
        const quantityInput = row.querySelector('input[name="t3"]');
        const resultInput = row.querySelector('input[name="t4"]');

        const price = Number(priceInput.value) || 0;
        const quantity = Number(quantityInput.value) || 0;

        const result = price * quantity;
        resultInput.value = result; 

        grandTotal += result;
    });

    document.getElementById('grandTotal').value = grandTotal;
}

function resetTable() {
    document.querySelectorAll('input').forEach(input => input.value = '');
}
