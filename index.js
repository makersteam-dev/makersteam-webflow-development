var mySwiper = new Swiper(".swiper-container", {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 1300,
  preloadImages: true,
  followFinger: false,
  effect: "coverflow",
  slideToClickedSlide: true,
  centeredSlides: true,
  slidesPerView: "1.2",
  coverflowEffect: {
    rotate: 0,
    stretch: -50,
    depth: 150,
    modifier: 2,
    slideShadows: false,
  },

  pagination: {
    el: ".slider-bullets-wrapper",
    clickable: true,
    type: "bullets",
  },
  breakpoints: {
    767: {
      slidesPerView: "2.32",
    },
  },
});

$(".slider-next").click(function () {
  mySwiper.slideNext();
});
$(".slider-prev").click(function () {
  mySwiper.slidePrev();
});
