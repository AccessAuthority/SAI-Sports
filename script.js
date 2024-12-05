const carousel = document.querySelector('.carousel');
let index = 0;

// Function to slide the carousel
function slideCarousel() {
  // Ensure the index stays within bounds
  if (index >= carousel.children.length - 5) {
    index = 0; // Reset to the beginning if we reached the end
  } else {
    index++;
  }
  // Move the carousel by shifting the `transform` property
  carousel.style.transform = `translateX(-${index * 20}%)`;
}

// Automatically slide every 3 seconds
setInterval(slideCarousel, 3000);
