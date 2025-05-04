document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector(".menu-button");
    const menu = document.querySelector(".menu");

    menuButton.addEventListener("click", function() {
        menu.classList.toggle("open");
    });

    const elements = document.querySelectorAll("img, .product");

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
});
