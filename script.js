const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const items = document.querySelectorAll('.past-auction');
const totalItems = items.length;

let currentIndex = 0;

function updateCarousel() {
  // Calculate the transform value to show the correct items
  const offset = -(currentIndex * 50); // Each item is 50% wide
  carousel.style.transform = `translateX(${offset}%)`;
}

function showNext() {
  currentIndex = (currentIndex + 1) % (totalItems / 2); // Loop back to the start
  updateCarousel();
}

function showPrev() {
  currentIndex = (currentIndex - 1 + (totalItems / 2)) % (totalItems / 2); // Loop back to the end
  updateCarousel();
}

// Event listeners for buttons
nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);

// Auto-slide every 5 seconds
setInterval(showNext, 5000);