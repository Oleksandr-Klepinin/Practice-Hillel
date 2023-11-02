document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.js--class');
    const nameError = form.querySelector('.name-error');
    const messageError = form.querySelector('.message-error');
    const telError = form.querySelector('.tel-error');
    const emailError = form.querySelector('.email-error');

    const nameRegex = /^[a-zA-Z]+$/;
    const telRegex = /^\+380[0-9]{9}$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    form.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(form);
        const action = form.action;
        const method = form.method;

        formData.forEach((value, key) => {
            console.log(`${key} - ${value}`);
        });

        console.log({ action, method });

        validateField(formData.get('name'), nameRegex, nameError, 'Please enter a valid name');
        validateFieldLength(formData.get('message'), 5, messageError, 'Message should be at least 5 characters long');
        validateFieldRegex(formData.get('tel'), telRegex, telError, 'Please enter a valid phone number starting with +380');
        validateFieldRegex(formData.get('email'), emailRegex, emailError, 'Please enter a valid email address');
    });

    function validateField(value, regex, errorElement, errorMessage) {
        if (!value || !value.match(regex)) {
            errorElement.textContent = errorMessage;
        } else {
            errorElement.textContent = '';
        }
    }

    function validateFieldLength(value, length, errorElement, errorMessage) {
        if (value.length < length) {
            errorElement.textContent = errorMessage;
        } else {
            errorElement.textContent = '';
        }
    }

    function validateFieldRegex(value, regex, errorElement, errorMessage) {
        if (!value.match(regex)) {
            errorElement.textContent = errorMessage;
        } else {
            errorElement.textContent = '';
        }
    }
});