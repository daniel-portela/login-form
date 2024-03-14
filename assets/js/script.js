// Selecionando elementos de formulário e entrada
const form = document.querySelector("form");
const passwordInput = document.getElementById("password");
const passToggleBtn = document.getElementById("pass-toggle-btn");

// Função para exibir mensagens de erro
const showError = (field, errorText) => {
    field.classList.add("error");
    const errorElement = document.createElement("small");
    errorElement.classList.add("error-text");
    errorElement.innerText = errorText;
    field.closest(".form-group").appendChild(errorElement);
}

// Função para lidar com o envio de formulários
const handleFormData = (e) => {
    e.preventDefault();

    // Recuperando elementos de entrada
    const fullnameInput = document.getElementById("fullname");
    const emailInput = document.getElementById("email");
    const dateInput = document.getElementById("date");
    const genderInput = document.getElementById("gender");

    // Obtendo valores cortados de campos de entrada
    const fullname = fullnameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const date = dateInput.value;
    const gender = genderInput.value;

    // Padrão de expressão regular para validação de email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Limpando mensagens de erro anteriores
    document.querySelectorAll(".form-group .error").forEach(field => field.classList.remove("error"));
    document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());

    // Executando verificações de validação
    if (fullname === "") {
        showError(fullnameInput, "Escreva seu nome completo");
    }
    if (!emailPattern.test(email)) {
        showError(emailInput, "Digite um endereço de e-mail válido");
    }
    if (password === "") {
        showError(passwordInput, "Coloque sua senha");
    }
    if (date === "") {
        showError(dateInput, "Selecione a sua data de nascimento");
    }
    if (gender === "") {
        showError(genderInput, "Selecione o seu sexo");
    }

    // Verificando quaisquer erros restantes antes do envio do formulário
    const errorInputs = document.querySelectorAll(".form-group .error");
    if (errorInputs.length > 0) return;

    // Enviando o formulário
    form.submit();
}

// Alternando a visibilidade da senha
passToggleBtn.addEventListener('click', () => {
    passToggleBtn.className = passwordInput.type === "password" ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});

// Tratamento de evento de envio de formulário
form.addEventListener("submit", handleFormData);