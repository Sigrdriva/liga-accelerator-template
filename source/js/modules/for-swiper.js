// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   loop: true,

//   // If we need pagination

//   pagination: {
//     el: '.swiper-pagination',
//     type: 'custom',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-right',
//     prevEl: '.swiper-button-left',
//   },

// });

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
