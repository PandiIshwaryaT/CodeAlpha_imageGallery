let currentIndex = 0;
let images = [];

function changeCategory(category) {
  const slider = document.getElementById('slider');
  slider.innerHTML = ''; // Clear current images
  images = [];

  for (let i = 1; i <= 4; i++) {
    const img = document.createElement('img');
    img.src = `images/${category}/${i}.jpg`;
    slider.appendChild(img);
    images.push(img);
  }

  currentIndex = 0;
  updateSlidePosition();
}

function moveSlide(direction) {
  if (images.length === 0) return;

  currentIndex += direction;

  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;

  updateSlidePosition();
}

function updateSlidePosition() {
  const slider = document.getElementById('slider');
  const slideWidth = slider.clientWidth;
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Load default category on page load
window.onload = () => {
  changeCategory('mountains');
};
