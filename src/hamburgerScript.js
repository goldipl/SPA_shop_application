const menuOn = document.querySelectorAll("nav .btn-primary");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener('click', () => {
    menuOn.forEach(menuOn => {
        if (menuOn.classList.contains("hamburgerOn")) {
            menuOn.classList.remove("hamburgerOn");
        } else {
            menuOn.classList.add("hamburgerOn");
        }         
    });
});