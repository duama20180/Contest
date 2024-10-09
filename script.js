document.addEventListener("DOMContentLoaded", function() {
    const tooltip = document.getElementById("tooltip");

    const troitsyaDate = new Date("2025-06-08");
    const today = new Date();

    const diffTime = Math.abs(troitsyaDate - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    tooltip.textContent = `До Зелених cвят залишилось ${diffDays} днів`;

    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", function() {
        menu.classList.toggle("open");
    });
});

