const form = document.getElementById('form');
const alerthtml = document.getElementById('alert');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    email = event.target.elements[0].value;
    message = event.target.elements[1].value;
    if (email === "" || message === "") {
        alerthtml.innerHTML = `
            <div class="alert alert-danger" role="alert">
                <strong>Invalid input.</strong> Make sure all fields are set.
            </div>
        `
    } else {
        alerthtml.innerHTML = `
            <div class="alert alert-success" role="alert">
                <strong>Sent.</strong> Thank you we'll reach back to you as soon as possible.
            </div>
        `
        event.target.reset();
    }
});