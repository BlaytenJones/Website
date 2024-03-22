document.addEventListener("DOMContentLoaded", function() {
    const leftButton = document.getElementById("leftButton");
    const rightButton = document.getElementById("rightButton");
    const carousel = document.querySelector(".carousel");
  
    leftButton.addEventListener("click", function() {
      carousel.scrollLeft -= carousel.offsetWidth;
    });
  
    rightButton.addEventListener("click", function() {
      carousel.scrollLeft += carousel.offsetWidth;
    });
  });