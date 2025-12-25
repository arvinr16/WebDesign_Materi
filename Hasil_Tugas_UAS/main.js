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
