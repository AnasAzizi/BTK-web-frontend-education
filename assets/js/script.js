
document.addEventListener("DOMContentLoaded", (event) => {
    const swiperSliderMain = new Swiper(".slider--main", {
        slidesPerView: 1,
    });
});

document.addEventListener("DOMContentLoaded", (event) => {
    const swiper = new Swiper(".slider-feedback-wrapper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        breakpoints: {
            992: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1400: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }
    });
});

document.addEventListener("DOMContentLoaded", (event) => {
    const sliderStatistics = new Swiper(".slider--statistsics", {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1400: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
        }
    });
});

document.addEventListener("DOMContentLoaded", (event) => {
    const swiper = new Swiper(".slider--team", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1400: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }
    });
});
