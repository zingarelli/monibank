export default function isCpf(inputElement) {
    // clear non-digit characters (. and -)
    const cpf = inputElement.value.replace(/\.|-/g, '');
    if (validateRepeatedNumbers(cpf) || validateFirstDigit(cpf) || validateSecondDigit(cpf)) {
        inputElement.setCustomValidity('Esse CPF não é válido');
    }
    else {
        inputElement.setCustomValidity('');
    }
}

// a CPF never has the same number 11 times
function validateRepeatedNumbers(cpf) {
    const repeatedNumbers = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999',
    ];
    return repeatedNumbers.includes(cpf);
}

// standard validation of the first digit of the last two digits of a CPF
function validateFirstDigit(cpf) {
    let sum = 0;
    let multiplier = 10;

    for (let i=0; i<9; i++) {
        sum += cpf[i] * multiplier;
        multiplier--;
    }

    sum = (sum * 10) % 11;

    if (sum == 10 || sum == 11) {
        sum = 0;
    }

    return sum != cpf[9];
}

// standard validation of the second digit of the last two digits of a CPF
function validateSecondDigit(cpf) {
    let sum = 0;
    let multiplier = 11;

    for (let i=0; i<10; i++) {
        sum += cpf[i] * multiplier;
        multiplier--;
    }

    sum = (sum * 10) % 11;

    if (sum == 10 || sum == 11) {
        sum = 0;
    }

    return sum != cpf[10];
}