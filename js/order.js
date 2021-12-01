const form = document.getElementById('form');
let items = "";

function createFormGroup(title, items) {
     return `
        <div class="form-group col-12 col-md-6 col-lg-3">
            <h5>${title}</h5>
            ${items}
        </div>
    `;
}

function createItemCheckbox(name, price) {
    return `
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="${name}" price="${price}"" id="${name+price}">
            <label class="form-check-label" for="${name+price}">${name} <span class="ml-2 text-primary">${price}</span></label>
        </div>
    `;
};

for (let i = 0; i < services.length; i++) {
    items += createItemCheckbox(services[i].name, "P100");
}
form.innerHTML = createFormGroup("Services", items) + form.innerHTML;

for (let i = 0; i < menu.length; i++) {
    items = "";
    for (let j = 0; j < menu[i].items.length; j++) {
        items += createItemCheckbox(menu[i].items[j].name, menu[i].items[j].price);
    }
    form.innerHTML = createFormGroup(menu[i].type, items) + form.innerHTML;
}
