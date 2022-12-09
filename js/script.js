import isCpf from "./validateCPF.js";
import isOver18 from "./validateAge.js";

const requiredFormInputs = document.querySelectorAll('[required]');
const submitBtn = document.querySelector('[data-botao-enviar]');
const form = document.querySelector('[data-formulario]');

const commomErrors = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
];

const customMessages = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "O campo nome precisa ter pelo menos 3 caracteres."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "O campo nome precisa ter pelo menos 4 caracteres."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caracteres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF precisa ter 11 dígitos."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}

// validation everytime the user gets out of an input
requiredFormInputs.forEach((inputElement) => {
    inputElement.addEventListener('blur', () => {
        validateInput(inputElement);
    })
    inputElement.addEventListener('invalid', e => e.preventDefault());
})

// validation when the user tries to submit the form
submitBtn.addEventListener('click', () => requiredFormInputs.forEach(input => validateInput(input)));

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formDataList = {};
    requiredFormInputs.forEach(input => {
        formDataList[input.name] =  input.value;
    });
    // save data locally in the browser
    localStorage.setItem('register', JSON.stringify(formDataList));
    window.location.href = './abrir-conta-form-2.html';
});

function validateInput(inputElement) {
    let message = '';

    // custom validation
    if (inputElement.name === 'cpf' && inputElement.value.length >= 11) {
        isCpf(inputElement);
    }
    if (inputElement.name === 'aniversario' && inputElement.value !== '') {
        isOver18(inputElement);
    }

    // handling invalid inputs
    commomErrors.forEach(error => {
        if (inputElement.validity[error]) {
            message = customMessages[inputElement.name][error];
        }
    })

    const errorMessageElement = inputElement.parentNode.querySelector('.mensagem-erro');
    const inputIsValid = inputElement.checkValidity();
    if (inputIsValid) {
        errorMessageElement.textContent = '';
    }
    else {
        errorMessageElement.textContent = message;
    }
}