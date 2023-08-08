const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}


function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Password doesn\'t match ')
    }
}

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(email.value).toLowerCase())) {
        showSuccess(email);
    } else {
        showError(email, 'Email is not valid');
    }

}


function checkRequired(inputArr) {
    inputArr.forEach(input => {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`)
        } else {
            showSuccess(input);
        }
    });
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be atleast ${min} characters`)
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must not exceed ${max} characters`)
    } else {
        showSuccess(input);
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkRequired([username, email, password, Repassword]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    isValidEmail(email);
    checkPasswordMatch(password, Repassword);
});

function done() {
    var a = checkRequired([username, email, password, Repassword]);
    var b = checkLength(username, 3, 15);
    var c = checkLength(password, 6, 25);
    var d = isValidEmail(email);
    var e = checkPasswordMatch(password, Repassword);
    if (a === true && b === true && c === true && d === true && e === true) {
        alert("You're a Quiz Hub member now!");
        window.open("Homepage.html");
    }
}