import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  // loop: true,
  // autoplay: true,
  effect: 'slide',
  spaceBetween: 10,
  slidesPerView: 4,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      // spaceBetween: 300,
    },
    1200: {
      spaceBetween: 10,
      slidesPerView: 4,
    },
  },
});

if (window.location.pathname === '/catalog.html') {
  console.log('qq');
}
