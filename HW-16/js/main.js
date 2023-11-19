"use strict";

function FormValidate(form) {
    const SUCCESS_CLASS_NAME = 'success';
    const ERROR_CLASS_NAME = 'error';
    const ERROR_ITEM_CLASS_NAME = 'error__item';
    const FORM_CONTROL_CLASS_NAME = 'form-group';

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

    this.checkFormElement = function () {
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
    };

    this.checkForm = function () {
        const errorElements = form.querySelectorAll(`.${ERROR_CLASS_NAME}`);
        this.success = errorElements.length === 0;

        if (this.success) {
            form.classList.add(SUCCESS_CLASS_NAME);
            this.highlightSuccessFields();
            this.displayFormData();
        } else {
            form.classList.remove(SUCCESS_CLASS_NAME);
        }
    };

    this.required = function (element, reqMessage) {
        if (element.value.length === 0) {
            this.errorTemplate(element, reqMessage);
        }
    };

    this.minLength = function (element, minMessage) {
        const minLength = parseInt(element.dataset.min_length);
        if (element.value.length < minLength) {
            this.errorTemplate(element, minMessage);
        }
    };

    this.email = function (element, emailMessage) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(element.value)) {
            this.errorTemplate(element, emailMessage);
        }
    };

    this.errorTemplate = function (element, reqMessage) {
        const parent = element.closest(`.${FORM_CONTROL_CLASS_NAME}`);
        if (parent.classList.contains(ERROR_CLASS_NAME) === false) {
            parent.classList.add(ERROR_CLASS_NAME);
            parent.insertAdjacentHTML('beforeend', `<small class="${ERROR_ITEM_CLASS_NAME}">${reqMessage}</small>`);
        }
    };

    this.clearError = function (element) {
        const parent = element.closest(`.${FORM_CONTROL_CLASS_NAME}`);
        if (parent !== null && parent.classList.contains(ERROR_CLASS_NAME)) {
            parent.classList.remove(ERROR_CLASS_NAME);
            parent.querySelector(`.${ERROR_ITEM_CLASS_NAME}`).remove();
        }
    };

    this.getFormValues = function () {
        const values = {};
        for (let i = 0; i < this.elements.length; i++) {
            const element = this.elements[i];
            if (element.name) {
                values[element.name] = element.value;
            }
        }
        return values;
    };

    this.highlightSuccessFields = function () {
        for (let i = 0; i < this.elements.length; i++) {
            const element = this.elements[i];
            const parent = element.closest(`.${FORM_CONTROL_CLASS_NAME}`);
            if (parent && !parent.classList.contains(ERROR_CLASS_NAME) && element.value.trim() !== '') {
                parent.classList.add(SUCCESS_CLASS_NAME);
            }
        }
    };

    this.disableFormFields = function () {
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
    };

    this.displayFormData = function () {
        console.log("Success! Form data:", this.getFormValues());
        console.log("Form method:", form.method);
        console.log("Form action:", form.action);
    };
}

document.addEventListener('DOMContentLoaded', function () {
    const regForm = new FormValidate(document.querySelector('.js--reg_form'));
    document.querySelector('.js--check').addEventListener('click', function () {
        regForm.checkForm();
    });
});