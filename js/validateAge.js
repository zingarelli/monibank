export default function isOver18(inputElement) {
    // const dateOfBirth = new Date(inputElement.value.split('-'));
    const dateOfBirth = new Date(inputElement.value);
    if (validateAge(dateOfBirth)) {
        inputElement.setCustomValidity('');
    }
    else {
        inputElement.setCustomValidity('O usuário não tem 18 anos');
    }
}

function validateAge(dateOfBirth) {
    const currentDate = new Date();
    const date18Years = new Date(dateOfBirth.getUTCFullYear()+18, dateOfBirth.getUTCMonth(), dateOfBirth.getUTCDate());

    return currentDate >= date18Years;
}