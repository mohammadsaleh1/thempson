// https://swiperjs.com/ 
// ===================== -->

var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 1200,
    grabCursor: true,
    slidesPerView: 1,


    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    on: {
      slideChangeTransitionStart: function () {
          // Slide captions
          var swiper = this;
          var slideTitle = $(swiper.slides[swiper.activeIndex]).attr("data-title");
          var slideSubtitle = $(swiper.slides[swiper.activeIndex]).attr("data-subtitle");
          $(".slide-captions").html(function() {
            return "<h2 class='current-title'>" + slideTitle + "</h2>" + "<h4 class='current-subtitle'>" + slideSubtitle + "</h4>";
          });
      }
    }
});

// Slide captions on load
var sizes1 = $(mySwiper.slides[mySwiper.activeIndex]).attr("data-title");
	var sizes2 = $(mySwiper.slides[mySwiper.activeIndex]).attr("data-subtitle");
	$(".slide-captions").html(function() {
	return "<h2 class='current-title'>" + sizes1 + "</h2>" + "<h3 class='current-subtitle'>" + sizes2 + "</h3>";
}); 


var swiper2 = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  
  // autoHeight: true,
  pagination: {
    el: '.blog-pagination',
    clickable: true,
  }
});

  // Swiper: Slider
  const swiper = new Swiper('.swiper-container2', {
    loop: true,
    speed: 500,
    slidesPerView: 1.5,
    spaceBetween: 35,
    autoplay: {
        delay: 3000,
    },
    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
    },
    breakpoints: {

        640: {
            slidesPerView: 2.5,
        },
        768: {
            slidesPerView: 2.75,
        },
        1080: {
            slidesPerView: 2.5,
        },
        1280: {
            slidesPerView: 4,
        },
    },
});


$(".form-control").click(function() {
  $(this).parent().addClass("label-animate");
});



