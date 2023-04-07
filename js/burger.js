const menu_button = document.querySelector('.navbar-icon');
const menu = document.querySelector('.navbar');

document.addEventListener('click', (e) => {
  console.log(e.target);
  if (e.target === menu_button || e.target.parentNode === menu_button) {
    menu.classList.toggle('active');
    menu_button.classList.toggle('active');
  } else {
    menu.classList.remove('active');
    menu_button.classList.remove('active');
  }
});
