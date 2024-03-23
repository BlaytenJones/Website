document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    const items = carousel.querySelectorAll('.carousel__item');
    let currentIndex = 0;
  
    function moveToNextItem() {
      if (currentIndex < items.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      updateCarousel();
    }
  
    function moveToPrevItem() {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = items.length - 1;
      }
      updateCarousel();
    }
  
    function updateCarousel() {
      items.forEach((item, index) => {
        if (index === currentIndex) {
          item.style.transform = 'translateX(0)';
        } else {
          item.style.transform = 'translateX(100%)';
        }
      });
    }
  
    const nextButton = document.getElementById('rightButton');
    const prevButton = document.getElementById('leftButton');
  
    nextButton.addEventListener('click', moveToNextItem);
    prevButton.addEventListener('click', moveToPrevItem);
    console.log("AAAAAAA");
  });