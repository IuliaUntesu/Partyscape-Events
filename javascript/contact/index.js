// Contact form validation
const inputField = document.querySelectorAll('input');
const userName = document.querySelector('.input-data .name');
const email = document.querySelector('.input-data .email');
const phone = document.querySelector('.input-data .phone');
const subject = document.querySelector('.input-data .subject');
const message = document.querySelector('.input-data .message');
const submit = document.querySelector('.submit-button');

inputField.forEach((input) => {
  input.addEventListener('input', () => {
    input.classList.toggle('has-value', input.value.trim() !== '');
  });
});

function validateName() {
  const errorMessage = document.querySelector(".form-data.form-name").children[1];
  const re = /^[a-zA-ZăâîșțĂÂÎȘȚ \-]*$/;

  if (!re.test(userName.value)) {
    errorMessage.style.visibility = "unset";
    return false;
  } else {
    errorMessage.style.visibility = "hidden";
    return true;
  }
}

function validateEmail() {
  const errorMessage = document.querySelector(".form-data.form-email").children[1];
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (!re.test(email.value)) {
    errorMessage.style.visibility = "unset";
    return false;
  } else {
    errorMessage.style.visibility = "hidden";
    return true;
  }
}

function validatePhone() {
  const errorMessage = document.querySelector(".form-data.form-phone").children[1];
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if (!re.test(phone.value)) {
    errorMessage.style.visibility = "unset";
    return false;
  } else {
    errorMessage.style.visibility = "hidden";
    return true;
  }
}

function validateSubject() {
  const errorMessage = document.querySelector(".form-data.form-subject").children[1];
  const re = /^[a-zA-Z0-9\s]{2,}$/;

  if (!re.test(subject.value)) {
    errorMessage.style.visibility = "unset";
    return false;
  } else {
    errorMessage.style.visibility = "hidden";
    return true;
  } 
}

function validateMessage() {
  const errorMessage = document.querySelector(".form-data.form-message").children[1];
  const re = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\s]{10,}$/;

  if (!re.test(message.value)) {
    errorMessage.style.visibility = "unset";
    return false;
  } else {
    errorMessage.style.visibility = "hidden";
    return true;
  }
}

submit.addEventListener('click', (e) => {
  e.preventDefault();
  validateName();
  validateEmail();
  validatePhone();
  validateSubject();
  validateMessage();

  if (validateName() === false || validateEmail() === false || validatePhone() === false || validateSubject() === false || validateMessage() === false) {
    return;
  }

  sendData();
});

const sendData = () => {
  const data = {};

  data.name = userName.value;
  data.email = email.value;
  data.phone = phone.value;
  data.subject = subject.value;
  data.message = message.value;
  data.access_key = "ba22ddd2-e038-4a07-8474-0237d8f6c5ea";

  fetch ('https://api.web3forms.com/submit/', {
    method:"POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  })
  .then((response) => {
    if (response.status === 200) {
      window.location.href = "https://web3forms.com/success";
    } else {
      response.json().then(errorData => {
        console.error("Eroare la trimitere: ", errorData.message);
      });
    }
  })
  .catch((error) => {
    console.error('Formularul nu a fost trimis! Te rugam sa incerci mai tarziu!', error);
  });
}
