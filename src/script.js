const { default: Swiper } = require("swiper");

var swiper=new Swiper(".myswiper",{
    spaceBetween: 20,
    loop:true,
    autoplay:
    {
        delay:2500,
        disableOnInteraction:false,
    },
    breakpoints:
    {
        640:
        {
            slidesPerView:1,
        },
        768:
        {
            slidesPerView:2,
        },
        1024:
        {
            slidesPerView:3,
        }
    },
});