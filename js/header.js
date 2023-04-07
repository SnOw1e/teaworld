const navbar = document.querySelector('.navbar');
const defaultOffset = 200;
let lastScroll = 0;

const scrollPosition = () => window.scrollY || document.documentElement.scrollTop;
const isHide = () => navbar.classList.contains('hide');

// Header
window.addEventListener('scroll', () => {
  if (scrollPosition() > lastScroll && !isHide()) {
    // scroll down
    // console.log('down');
    navbar.classList.add('hide');
  } else if (scrollPosition() < lastScroll && isHide()) {
    // scroll up
    // console.log('up');
    navbar.classList.remove('hide');
  }

  lastScroll = scrollPosition();
});
