// 1
class BankAccount {
    constructor(initialBalance) {
        this.balance = initialBalance;
    }

    getBalance() {
        return this.balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount} successfully.`);
        } else {
            console.log('Invalid deposit amount. Please deposit a positive amount.');
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} successfully.`);
        } else {
            console.log('Invalid withdrawal amount or insufficient funds.');
        }
    }
}

const account1 = new BankAccount(1000);
console.log(account1.getBalance());
account1.deposit(500);
console.log(account1.getBalance());
account1.withdraw(200);
console.log(account1.getBalance());


// 2
class FormValidator {
    constructor(form) {
        this.SUCCESS_CLASS_NAME = 'success';
        this.ERROR_CLASS_NAME = 'error';
        this.ERROR_ITEM_CLASS_NAME = 'error__item';
        this.FORM_CONTROL_CLASS_NAME = 'form-group';

        this.sended = null;
        this.success = null;
        this.elements = form.elements;
        this.form = form;

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.sended = true;
            this.checkFormElement();
            this.checkForm();

            if (this.success) {
                this.disableFormFields();
            }
        });
    }

    checkFormElement() {
        for (let i = 0; i < this.elements.length; i++) {
            const element = this.elements[i];
            const reqMessage = element.dataset.req;
            const minMessage = element.dataset.min_message;
            const emailMessage = element.dataset.email;
            this.clearError(element);

            if (reqMessage) {
                this.required(element, reqMessage);
            }

            if (minMessage) {
                this.minLength(element, minMessage);
            }

            if (emailMessage) {
                this.email(element, emailMessage);
            }
        }
    }

    checkForm() {
        const errorElements = this.form.querySelectorAll(`.${this.ERROR_CLASS_NAME}`);
        this.success = errorElements.length === 0;

        if (this.success) {
            this.form.classList.add(this.SUCCESS_CLASS_NAME);
            this.highlightSuccessFields();
            this.displayFormData();
        } else {
            this.form.classList.remove(this.SUCCESS_CLASS_NAME);
        }
    }

    required(element, reqMessage) {
        if (element.value.length === 0) {
            this.errorTemplate(element, reqMessage);
        }
    }

    minLength(element, minMessage) {
        const minLength = parseInt(element.dataset.min_length);
        if (element.value.length < minLength) {
            this.errorTemplate(element, minMessage);
        }
    }

    email(element, emailMessage) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(element.value)) {
            this.errorTemplate(element, emailMessage);
        }
    }

    errorTemplate(element, reqMessage) {
        const parent = element.closest(`.${this.FORM_CONTROL_CLASS_NAME}`);
        if (!parent.classList.contains(this.ERROR_CLASS_NAME)) {
            parent.classList.add(this.ERROR_CLASS_NAME);
            parent.insertAdjacentHTML('beforeend', `<small class="${this.ERROR_ITEM_CLASS_NAME}">${reqMessage}</small>`);
        }
    }

    clearError(element) {
        const parent = element.closest(`.${this.FORM_CONTROL_CLASS_NAME}`);
        if (parent !== null && parent.classList.contains(this.ERROR_CLASS_NAME)) {
            parent.classList.remove(this.ERROR_CLASS_NAME);
            parent.querySelector(`.${this.ERROR_ITEM_CLASS_NAME}`).remove();
        }
    }

    getFormValues() {
        const values = {};
        for (let i = 0; i < this.elements.length; i++) {
            const element = this.elements[i];
            if (element.name) {
                values[element.name] = element.value;
            }
        }
        return values;
    }

    highlightSuccessFields() {
        for (let i = 0; i < this.elements.length; i++) {
            const element = this.elements[i];
            const parent = element.closest(`.${this.FORM_CONTROL_CLASS_NAME}`);
            if (parent && !parent.classList.contains(this.ERROR_CLASS_NAME) && element.value.trim() !== '') {
                parent.classList.add(this.SUCCESS_CLASS_NAME);
            }
        }
    }

    displayFormData() {
        console.log("Success! Form data:", this.getFormValues());
        console.log("Form method:", this.form.method);
        console.log("Form action:", this.form.action);
    }

    disableFormFields() {
        for (let i = 0; i < this.elements.length; i++) {
            const element = this.elements[i];
            if (element.type !== 'submit') {
                element.disabled = true;
            }
        }

        const submitButton = this.form.querySelector('[type="submit"]');
        if (submitButton) {
            submitButton.disabled = true;
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const regForm = new FormValidator(document.querySelector('.js--reg_form'));
    document.querySelector('.js--check').addEventListener('click', function () {
        regForm.checkForm();
    });
});