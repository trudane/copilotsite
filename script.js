document.addEventListener("DOMContentLoaded", function () {
  // Menu toggle functionality
  const menuButton = document.querySelector(".menu-button");
  const menu = document.querySelector(".menu");

  menuButton.addEventListener("click", function () {
    menu.classList.toggle("open");
  });

  // Reveal elements on scroll for a smooth fade-in effect
  const elements = document.querySelectorAll(".image-section img, .product");

  function reveal() {
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        el.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", reveal);
  // Trigger reveal on page load
  reveal();
});
