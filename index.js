document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector(".toggleButton");
    const menu = document.querySelector(".menu");

    toggleBtn.addEventListener("click", function () {
        menu.classList.toggle("show");

        if (menu.classList.contains('show')) {
            toggleBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            // No need to set style.display since the class "show" handles it.
        } else {
            toggleBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
            // No need to set style.display since the class "show" handles it.
        }
    });
});
