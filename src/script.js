/* ---------------- LOADER ---------------- */
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  if (loader) {
    loader.classList.add("hidden"); // fade out with CSS transition
  }
});

/* ---------------- PORTFOLIO SLIDER ---------------- */
const tabs = document.querySelectorAll(".tab-button");
const slider = document.getElementById("slider");

const slidesData = {
  brand: [
    { title: "Adidas", img: "images/Adidas.jpg", desc: "" },
    { title: "Sprite", img: "images/Sprite.jpg", desc: "" },
    { title: "Kylie Cosmetics", img: "images/Kylie.jpg", desc: "" },
  ],
  media: [
    { title: "Hennessy XO Experience", img: "images/Henny.jpg", desc: "" },
    { title: "TikTok Awards", img: "images/TikTok.jpg", desc: "" },
  ],
  creative: [
    { title: "Honey Comb Hair", img: "images/HoneyComb.jpg", desc: "" },
    { title: "Glamour Woman of the Year", img: "images/GlamourAward.jpg", desc: "" },
  ],
};

function loadSlides(tabName) {
  if (!slider) return;
  slider.innerHTML = "";
  slidesData[tabName].forEach((slide) => {
    const slideDiv = document.createElement("div");
    slideDiv.classList.add("slider-item");
    slideDiv.innerHTML = `
      <h3>${slide.title}</h3>
      <img src="${slide.img}" alt="${slide.title}">
      <p>${slide.desc}</p>
    `;
    slider.appendChild(slideDiv);
  });
}

if (tabs.length) {
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      loadSlides(tab.dataset.tab);
    });
  });

  // load default
  loadSlides("brand");
}

/* ---------------- FASHION CAROUSEL ---------------- */
const track = document.querySelector(".carousel-track");
if (track) {
  const slides = Array.from(track.children);
  const buttons = document.querySelectorAll(".carousel-buttons button");

  let currentIndex = 0;

  function updateCarousel(index) {
    track.style.transform = `translateX(-${index * 100}%)`;
    buttons.forEach((btn) => btn.classList.remove("active"));
    if (buttons[index]) buttons[index].classList.add("active");
  }

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      currentIndex = i;
      updateCarousel(currentIndex);
    });
  });

  // Auto-slide every 5s
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel(currentIndex);
  }, 5000);
}
