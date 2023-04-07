// Constants & variables
const name = document.querySelector('.name');
const phone = document.querySelector('.phone');

const nameInput = document.querySelector('#nameInput');
const phoneInput = document.querySelector('#phoneInput');

const button_main = document.querySelector('.hero__content-button');

// Form
document.addEventListener('click', (e) => {
  if (e.target.parentNode == name) {
    name.classList.add('active');
  } else if (e.target.parentNode !== name && nameInput.value == '') {
    name.classList.remove('active');
  }
});

document.addEventListener('click', (e) => {
  if (e.target.parentNode == phone) {
    phone.classList.add('active');
  } else if (e.target.parentNode !== phone && phoneInput.value == '') {
    phone.classList.remove('active');
  }
});

button_main.addEventListener('click', (e) => {
  document.querySelector('.form').scrollIntoView();
});
