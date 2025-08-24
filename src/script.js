const tabs = document.querySelectorAll('.tab-button');
const slider = document.getElementById('slider');
const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);

let currentIndex = 1; // Start at 1 because we have a cloned slide at index 0
let isTransitioning = false;// Store slides for each tab

const slidesData = {
  brand: [
    { title: 'Adidas', img: 'images/Adidas.jpg', desc: '' },
    { title: 'Sprite', img: 'images/Sprite.jpg', desc: '' },
    { title: 'Kylie Cosmetics', img: 'images/Kylie.jpg', desc: '' },
    { title: 'Mr Price', img: 'images/wondabra.jpg', desc: '' },
  ],
  media: [
    { title: 'Hennessy XO Experience', img: 'images/Henny.jpg', desc: '' },
    { title: 'TikTok Awards', img: 'images/TikTok.jpg', desc: '' },
    { title: 'Nivea Launch', img: 'images/Nivea.jpg', desc: '' },
    { title: 'Brutal Fruit Brunch', img: 'images/Brutal.jpg', desc: '' },
  ],
  creative: [
    { title: 'Honey Comb Hair', img: 'images/HoneyComb.jpg', desc: '' },
    { title: 'Glamour Woman of the Year', img: 'images/GlamourAward.jpg', desc: '' },
    { title: 'Audio journal', img: 'images/AudioJournal.jpg', desc: '' },
    { title: 'Glamours Most Glamorous', img: 'images/Award.jpg', desc: '' },
  ],
};

// Function to load slides based on tab
function loadSlides(tabName) {
  slider.innerHTML = '';
  slidesData[tabName].forEach(slide => {
    const slideDiv = document.createElement('div');
    slideDiv.classList.add('slider-item');
    slideDiv.innerHTML = `
      <h3>${slide.title}</h3>
      <img src="${slide.img}" alt="${slide.title}">
      <p>${slide.desc}</p>
    `;
    slider.appendChild(slideDiv);
  });
  currentIndex = 0;
  updateSliderPosition();
}

// Tab click event
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    loadSlides(tab.dataset.tab);
  });
});

// Update slider position
function updateSliderPosition() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Previous & Next Buttons with infinite loop
prevBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slider.children.length - 1; // loop to last slide
  }
  updateSliderPosition();
});

nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= slider.children.length) {
    currentIndex = 0; // loop back to first slide
  }
  updateSliderPosition();
});

function updateCarousel() {
  const width = items[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentIndex * width}px)`;
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
  updateCarousel();
});

window.addEventListener('resize', updateCarousel);
