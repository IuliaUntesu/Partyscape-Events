// Contact form validation
const userName = document.querySelector('.input-data .name');
const email = document.querySelector('.input-data .email');
const phone = document.querySelector('.input-data .phone');
const subject = document.querySelector('.input-data .subject');
const message = document.querySelector('.input-data .message');
const submit = document.querySelector('.submit-button');

function validateName() {
  const errorMessage = document.querySelector(".input-data.input-name").children[2];
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
  const errorMessage = document.querySelector(".input-data.input-email").children[2];
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (!re.test(email.value)) {
    errorMessage.style.visibility = "unset";
    return false;
    console.log("valid");
  } else {
    errorMessage.style.visibility = "hidden";
    return true;
    console.log("invalid");
  }
}

function validatePhone() {
  const errorMessage = document.querySelector(".input-data.input-phone").children[2];
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
  const errorMessage = document.querySelector(".input-data.input-subject").children[2];
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
  const errorMessage = document.querySelector(".input-data.input-message").children[2];
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
  data.access_key = "68a9d868-89fa-474b-8345-ad18a5cb25d2";

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
    }
  });
}
