const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");
const closeBtn = document.getElementById("close-btn");

// Open menu
toggle.addEventListener("click", () => {
  nav.classList.add("active");
});

// Close menu
closeBtn.addEventListener("click", () => {
  nav.classList.remove("active");
});