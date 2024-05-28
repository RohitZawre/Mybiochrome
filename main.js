document.addEventListener("DOMContentLoaded", function() {
  let currentImageIndex = 0;
  const images = document.querySelectorAll('.hero-image');
  const navigationCircles = document.querySelectorAll('.navigation-circle');

  setInterval(() => {
    images[currentImageIndex].classList.remove('active');
    navigationCircles[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('active');
    navigationCircles[currentImageIndex].classList.add('active');
  }, 5000); // Change the duration (in milliseconds) between transitions as needed

  // Add click event listeners to navigation circles
  navigationCircles.forEach((circle, index) => {
    circle.addEventListener('click', () => {
      images[currentImageIndex].classList.remove('active');
      navigationCircles[currentImageIndex].classList.remove('active');
      currentImageIndex = index;
      images[currentImageIndex].classList.add('active');
      navigationCircles[currentImageIndex].classList.add('active');
    });
  });
});
 

/* for copy of div*/
/* var copy = document.querySelector(".logos-slide").cloneNode(true)
document.querySelector(".logos").appendChild(copy) */

    





  