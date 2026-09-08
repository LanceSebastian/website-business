// Trigger when the user scrolls
window.addEventListener("scroll", () => {
  document.querySelector(".nav-container")
    .classList.toggle("scroll", window.scrollY >= 1);
});
