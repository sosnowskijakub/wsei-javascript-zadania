const invoiceData = document.getElementById('invoiceData');
invoiceData.style.visibility = 'hidden';
document.addEventListener('click', function (e) {
    const checkBox = document.getElementById('invoice');
    if (e.target.id === 'invoice') {
        if (invoiceData.style.visibility !== 'hidden' && !checkBox.checked) {
            invoiceData.style.visibility = 'hidden';
        } else {
            invoiceData.style.visibility = 'visible';
        };
    }
});
