import Swiper from '../vendor/swiper.js';

export const swiperCoach = () => {
  const slider = new Swiper('.coaches__slider', {
    loop: true,
    grabCursor: 'true',
    breakpoints: {
      1366: {
        slidesPerView: 4,
        initialSlide: 0,
        spaceBetween: 40,
      },

      768: {
        slidesPerView: 2,
        initialSlide: 2,
        spaceBetween: 30,
      },

      320: {
        slidesPerView: 1,
        initialSlide: 2,
      },
    },

    wrapperClass: 'swiper-wrapper',
    slideClass: 'swiper-slide',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  slider.enable();
};
