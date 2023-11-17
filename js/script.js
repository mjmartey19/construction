
var swiper = new Swiper(".home-slider", {
    loop:true,
    grabCursor:true,
   autoplay: {
       delay: 9500,
       disableOnInteraction: false,
   },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
 });
 