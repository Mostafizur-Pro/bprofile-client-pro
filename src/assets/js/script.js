


var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: true, // Correct the typo: remove quotes around 'true'
  fade: true,
  grabCursor: true,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});

var intervalId; // Declare a variable to hold the interval ID

// Function to start the slide change interval
function startSlideInterval() {
  intervalId = setInterval(function () {
      swiper.slideNext();
  }, 10000);
}

// Start the interval when the page loads
startSlideInterval();

// Add event listeners to pause and resume the interval on card hover
var cardElements = document.querySelectorAll('.card');

cardElements.forEach(function (card) {
  card.addEventListener('mouseenter', function () {
      clearInterval(intervalId); // Pause the interval on hover
  });

  card.addEventListener('mouseleave', function () {
      startSlideInterval(); // Resume the interval on mouse leave
  });
});
