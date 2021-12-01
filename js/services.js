const container = document.querySelector('main > .container > .row');
const contentSpinner = document.getElementById('content-spinner');

let content = "";

for (let i = 0; i < services.length; i++) {
    content += `
    <div class="col-12 mb-4">
        <h3 class="mb-4">
            <div class="bg-primary text-white p-2 d-inline-flex justify-content-center align-items-center mr-2" style="width: 3rem; height: 3rem; border-radius: 16px;">${i+1}</div>
            <span>${services[i].name}</span>
        </h3>
        </ul class="mb-5">
    `
    subServices = services[i].subServices;
    for (let j = 0; j < subServices.length; j++) {
        content += `
            <li>
                <span class="text-primary font-weight-bold p-2">${subServices[j].name}</span>
                ${subServices[j].details}
            </li>
        `
        if (subServices[j].subServices) {
            subServices = subServices[j].subServices;
            content += '<ul class="ml-2">'
            for (let k = 0; k < subServices.length; k++) {
                content += `
                <li>
                    <span class="text-primary font-weight-bold p-2">${subServices[k].name}</span>
                    ${subServices[k].details}
                </li>
                `
            }
        }
        content += "</ul>"
    }

    content += "</ul></div>"
}

contentSpinner.remove();
container.innerHTML += content;