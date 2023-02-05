const buttonOpen = document.getElementById("burger-open");
const buttonClose = document.getElementById("burger-close");
const burgerMenu = document.getElementById("burger-menu");

function toggleMenu() {
    burgerMenu.classList.toggle("hidden");
    
    if(burgerMenu.classList.contains("hidden")) {
        burgerMenu.classList.remove("flex");
        
        buttonOpen.classList.remove("hidden");
        buttonClose.classList.add("hidden"); }
    else {
        burgerMenu.classList.add("flex");

        buttonOpen.classList.add("hidden");
        buttonClose.classList.remove("hidden");  }
}

document.getElementById("burger-open").onclick = toggleMenu;
document.getElementById("burger-close").onclick = toggleMenu;