document.addEventListener("DOMContentLoaded", function() {
    let elements = document.querySelectorAll(".skills, .projects, .project");

    function revealOnScroll() {
        elements.forEach(el => {
            let position = el.getBoundingClientRect().top;
            if (position < window.innerHeight - 50) {
                el.classList.add("show");
            }
        });
    }

    revealOnScroll(); 
    window.addEventListener("scroll", revealOnScroll);
});