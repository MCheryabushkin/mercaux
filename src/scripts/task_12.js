const modal = document.querySelector(".modal");
const openFormButton = document.querySelector(".open-form-btn");
const closeFormBtn = document.querySelector(".modal__close-btn");
const submitForm = document.querySelector(".modal__submit");

if (openFormButton) {
    const emailField = modal.querySelector("input[type='email']");
    const nameField = modal.querySelector("input[type='text']");
    const clearField = () => {
        emailField.value = '';
        emailField.style.borderColor = '#000';
        nameField.value = '';
        nameField.style.borderColor = '#000';
    }
    const regexp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi;
    const successText = document.querySelector(".success-text");

    openFormButton.addEventListener("click", () => {
        modal.classList.add("modal--visible");
        document.body.style.overflow = 'hidden';
        document.querySelector(".success-text").textContent = '';
    }, false);

    closeFormBtn.addEventListener("click", () => {
        clearField();
        modal.classList.remove("modal--visible");
        document.body.style.overflowY = 'scroll';
    }, false);

    modal.addEventListener("click", (e) => {
        if (e.target.classList.contains("modal")) {
            clearField();
            modal.classList.remove("modal--visible");
            document.body.style.overflowY = 'scroll';
        }
    }, false);

    submitForm.addEventListener("click", (e) => {
        e.preventDefault();
        
        if (!regexp.test(emailField.value)) {
            emailField.style.borderColor = 'red';
        }
        if (nameField.value.length < 3) {
            nameField.style.borderColor = nameField.value.length < 3 ? 'red' : '#000';
        } else {
            modal.classList.remove("modal--visible");
            document.body.style.overflowY = 'scroll';
            clearField();
            document.querySelector(".success-text").textContent = 'SUCCESS!'
        }
    }, false);

    emailField.addEventListener("focus", function() {
        this.style.borderColor = '#000';
    });
    emailField.addEventListener("blur", function() {
        if (regexp.test(this.value)) {
            this.style.borderColor = 'red';
        } else {
            this.style.borderColor = '#000';
        }
    });
    nameField.addEventListener("focus", function() {
        this.style.borderColor = '#000';
    });
    nameField.addEventListener("blur", function() {
        if (this.value.length < 3) {
            this.style.borderColor = 'red';
        } else {
            this.style.borderColor = '#000';
        }
    });
}