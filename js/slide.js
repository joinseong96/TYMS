$(function () {
  var swiper = new Swiper(".tyms_slide", {
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    loopedSlides: 5,
    slidesPerView: "auto",
    spaceBetween: 25,
    speed: 1000,
    autoplay : { 
      delay : 3000,
      disableOnInteraction : false,
    },
    breakpoints: {
      769: {
        spaceBetween: 10,
      },
      1580: {
        spaceBetween: 64,
      },
    },
  });
});
