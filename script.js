document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll("img, .product");
    const header = document.querySelector("header");

    function reveal() {
        elements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            if (elTop < window.innerHeight * 0.85) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", reveal);
    reveal();

    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.style.background = "rgba(255, 255, 255, 0.95)";
        } else {
            header.style.background = "rgba(255, 255, 255, 0.85)";
        }
    });
});
