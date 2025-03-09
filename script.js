// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Contact form submission (dummy alert for now)
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message sent! (Implement backend later)");
});
