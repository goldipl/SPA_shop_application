const menuOn = document.querySelectorAll("nav .btn-primary");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener('click', () => {
    menuOn.forEach(button => {
        if (button.classList.contains("hamburgerOn")) {
            button.classList.remove("hamburgerOn");
            hamburger.innerText = "☰";
        } else {
            button.classList.add("hamburgerOn");
            hamburger.innerText = "✖";
        }         
    });
});