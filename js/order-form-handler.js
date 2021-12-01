let total = 0;
const checkBoxes = document.querySelectorAll('input.form-check-input');
const totalhtml = document.getElementById('total');
const submitBtn = document.getElementById('submit');
const alerthtml = document.getElementById('alert');
const formhtml = document.getElementById('form-parent');
const nameinput = document.getElementById('name');

submitBtn.addEventListener('click', function() {
    if (nameinput.value === "" || totalhtml.textContent === "0.00") {
        alerthtml.innerHTML = `
        <div class="alert alert-danger" role="alert">
            <strong>Invalid input.</strong> Make sure all required fields are set.
        </div>
        `;
    } else {
        alerthtml.innerHTML = `
        <div class="alert alert-success" role="alert">
        <h5>Thank you ${nameinput.value}!</h5>
        <strong>Order has been placed.</strong> Partial amount: P${totalhtml.textContent}. You can visit us at your own convinience.
        </div>
        `;
        totalhtml.innerHTML = 0.00;
        formhtml.reset();
    }
        
})

function updateTotal() {
    totalhtml.innerHTML = total.toFixed(2);
}

for (let i = 0; i <checkBoxes.length; i++) {
    checkBoxes[i].addEventListener('change', function (event) {
        price = parseFloat(event.target.getAttribute('price').substring(1));
        if (this.checked) {
            total += price;
        } else {
            total -= price;
        }
        updateTotal();
    });
}
