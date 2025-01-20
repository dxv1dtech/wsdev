document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toggleBtn");
    const navLinks = document.getElementById("navLinks");

    toggleBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active"); // Toggle the active class
    });
});
