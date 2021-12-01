const container = document.querySelector('main > .container > .row');
const contentSpinner = document.getElementById('content-spinner');
let content = "";

for (let i = 0; i < menu.length; i++) {
    
    content += `
        <div class="col-12">
            <h3 class="mb-4 font-weight-bold">${menu[i].type}</h3>
        </div>
    `
    for (let j = 0; j < menu[i].items.length; j++) {
        content += `
        <div class="col-lg-4 col-md-6 col-12">
            <div class="card mb-4">
                <img class="card-img-top" src="${menu[i].items[j].img}" alt="${menu[i].items[j].name}">
                <div class="card-body d-flex flex-column justify-content-between">
                    <h4 class="card-title">${menu[i].items[j].name}</h4>
                    <p class="card-text">
                        ${menu[i].items[j].price}
                    </p>
                    <a href="/print_and_wait/order.html" class="btn btn-primary">Buy</a>
                </div>
            </div>
        </div>
        `
    }
}

contentSpinner.remove();
container.innerHTML += content;
