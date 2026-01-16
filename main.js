const toggle = document.getElementById("themeToggle");
const icon = document.getElementById("themeIcon");
const html = document.documentElement;

// 1. Load theme (localStorage / OS)
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

let theme = savedTheme || (prefersDark ? "dark" : "light");
applyTheme(theme);

// 2. Toggle event
toggle.addEventListener("change", () => {
  theme = toggle.checked ? "dark" : "light";
  applyTheme(theme);
  localStorage.setItem("theme", theme);
});

// 3. Apply theme function
function applyTheme(theme) {
  html.setAttribute("data-bs-theme", theme);

  // switch position
  toggle.checked = theme === "dark";

  // icon
  icon.classList.add("rotate");
  icon.textContent = theme === "dark" ? "☀️" : "🌙";

  setTimeout(() => {
    icon.classList.remove("rotate");
  }, 400);
}


// Logic for slider
const slider = document.getElementById("slider");

// Clone card
const cards = [...slider.children];
cards.forEach(card => slider.appendChild(card.cloneNode(true)));

let isDragging = false;
let startX = 0;
let currentTranslate = 0;
let prevTranslate = 0;

const speed = 0.9; // kecepatan (pixel per frame)
const cardWidth = 220 + 20;
const totalWidth = cardWidth * cards.length;

let animationId;

// Logic supaya animasi tetap continue
function animate() {
  currentTranslate -= speed;

  // reset posisi invisible
  if (Math.abs(currentTranslate) >= totalWidth) {
    currentTranslate = 0;
  }

  slider.style.transform = `translateX(${currentTranslate}px)`;
  animationId = requestAnimationFrame(animate);
}

// Logic supaya bisa di drag
slider.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.clientX;
  prevTranslate = currentTranslate;
  cancelAnimationFrame(animationId);
  slider.style.cursor = "grabbing";
});

window.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  const diff = e.clientX - startX;
  currentTranslate = prevTranslate + diff;
  slider.style.transform = `translateX(${currentTranslate}px)`;
});

window.addEventListener("mouseup", () => {
  if (!isDragging) return;
  isDragging = false;
  slider.style.cursor = "grab";
  requestAnimationFrame(animate);
});

requestAnimationFrame(animate);
