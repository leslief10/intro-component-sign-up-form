const form = document.querySelector('#form');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

const errorIconFirstName = document.querySelector('.error-icon-first-name');
const errorIconLastName = document.querySelector('.error-icon-last-name');
const errorIconEmail = document.querySelector('.error-icon-email');
const errorIconPassword = document.querySelector('.error-icon-password');

const errorMessageFirstName = document.querySelector('.error-message-first-name');
const errorMessageLastName = document.querySelector('.error-message-last-name');
const errorMessageEmail = document.querySelector('.error-message-email');
const errorMessagePassword = document.querySelector('.error-message-password');


form.addEventListener('submit', e => {
  e.preventDefault();

  validateInputs();
});

// error and success functions

const errorFirstNameInput = () => {
  errorIconFirstName.style.visibility = 'visible';
  errorMessageFirstName.style.visibility = 'visible';
  firstName.style.border = '1px solid #d28e8d';
  firstName.style.marginBottom = '9%';
}

const successFirstNameInput = () => {
  firstName.style.border = '1px solid var(--secondary-color)';
}

const errorLastNameInput = () => {
  errorIconLastName.style.visibility = 'visible';
  errorMessageLastName.style.visibility = 'visible';
  lastName.style.border = '1px solid #d28e8d';
  lastName.style.marginBottom = '9%';
}

const successLastNameInput = () => {
  lastName.style.border = '1px solid var(--secondary-color)';
}

const errorEmailInput = () => {
  errorIconEmail.style.visibility = 'visible';
  errorMessageEmail.style.visibility = 'visible';
  email.style.border = '1px solid #d28e8d';
  email.style.marginBottom = '9%';
}

const successEmailInput = () => {
  email.style.border = '1px solid var(--secondary-color)';
}

const errorPasswordInput = () => {
  errorIconPassword.style.visibility = 'visible';
  errorMessagePassword.style.visibility = 'visible';
  password.style.border = '1px solid #d28e8d';
  password.style.marginBottom = '9%'; 
}

const successPasswordInput = () => {
  password.style.border = '1px solid var(--secondary-color)';
}

//remove style added by JS when the input is selected

firstName.addEventListener('click', () => {
  errorIconFirstName.style.visibility = 'hidden';
  errorMessageFirstName.style.visibility = 'hidden';
  firstName.style.border = null;
  firstName.style.marginBottom = null;
});

lastName.addEventListener('click', () => {
  errorIconLastName.style.visibility = 'hidden';
  errorMessageLastName.style.visibility = 'hidden';
  lastName.style.border = null;
  lastName.style.marginBottom = null;
});

email.addEventListener('click', () => {
  errorIconEmail.style.visibility = 'hidden';
  errorMessageEmail.style.visibility = 'hidden';
  email.style.border = null;
  email.style.marginBottom = null;
});

password.addEventListener('click', () => {
  errorIconPassword.style.visibility = 'hidden';
  errorMessagePassword.style.visibility = 'hidden';
  password.style.border = null;
  password.style.marginBottom = null;
});

// validation functions

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (firstNameValue === '') {
    errorFirstNameInput();
  } else {
    successFirstNameInput();
  }

  if (lastNameValue === '') {
    errorLastNameInput();
  } else {
    successLastNameInput();
  }

   if (!isValidEmail(emailValue)) {
    errorEmailInput();
  } else {
    successEmailInput();
  }

  if(passwordValue === '') {
    errorPasswordInput();
  } else {
    successPasswordInput();
  }
};

