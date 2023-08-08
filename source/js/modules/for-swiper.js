import Swiper from '../vendor/swiper.js';

export const swiperCoach = () => {
  const sliderCoach = new Swiper('.coaches__slider', {
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

    wrapperClass: 'coaches__slider-wrapper',
    slideClass: 'coaches__slide',
    navigation: {
      nextEl: '.coaches__btn--next',
      prevEl: '.coaches__btn--prev',
    },
  });

  sliderCoach.enable();
};

export const swiperReview = () => {
  const sliderReview = new Swiper('.reviews__slider', {
    loop: false,
    grabCursor: 'true',
    // breakpoints: {
    //   1366: {
    //     slidesPerView: 4,
    //     initialSlide: 0,
    //     spaceBetween: 40,
    //   },

    //   768: {
    //     slidesPerView: 2,
    //     initialSlide: 2,
    //     spaceBetween: 30,
    //   },

    //   320: {
    //     slidesPerView: 1,
    //     initialSlide: 2,
    //   },
    // },

    wrapperClass: 'reviews__slider-wrapper',
    slideClass: 'reviews__slide',
    navigation: {
      nextEl: '.reviews__btn--next',
      prevEl: '.reviews__btn--prev',
    },
  });

  sliderReview.enable();
};
