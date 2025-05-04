document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    function reveal() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight * 0.85) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", reveal);
    reveal();
});
