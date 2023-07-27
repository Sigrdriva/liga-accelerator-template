import Swiper from '../vendor/swiper.js';

export const swiperCoach = () => {
  const slider = new Swiper('.coaches__slider', {
    slidesPerView: 4,
    spaceBetween: 40,
    loop: true,
    grabCursor: 'true',

    wrapperClass: 'swiper-wrapper',
    slideClass: 'swiper-slide',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  slider.enable();
};
