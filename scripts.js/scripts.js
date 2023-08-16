const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const telefoneInput = document.querySelector("#telefone")
const cepInput = document.querySelector("#cep")
const cidadeInput = document.querySelector("#cidade")
const estadoInput = document.querySelector("#estado")

console.log(form, nameInput, emailInput, telefoneInput, cepInput, cidadeInput, estadoInput)

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if(nameInput.value === "") {
        alert("Por favor, preencha o seu nome");
        return;
    }

    if(emailInput.value === "" || !isEmailValid(emailInput.value)){
        alert("Por favor, insira seu e-mail corretamente");
        return;
    }

    if(telefoneInput.value === "" || !isTelefoneValid(telefoneInput.value)){
        alert("Por favor, corrija o seu telefone");
        return;
    }

    if(cepInput.value === "" || !isCepValid(cepInput.value)){
        alert("Por favor, preencha seu CEP corretamente");
        return;
    }


function isEmailValid(email) {

    const emailRegex = new RegExp(
        /^^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)) {
        return true
    }
    return false
}

function isTelefoneValid(telefone) {

    const telefoneRegex = new RegExp(
        /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/
    )

    if(telefoneRegex.test(telefone)) {
        return true
    }
    return false
}

function isCepValid(cep) {

    const cepRegex = new RegExp(
        /^[0-9]{5}-[0-9]{3}$/
    );

    if(cepRegex.test(cep)) {
        return true
    }
    return false
}

form.submit();
});