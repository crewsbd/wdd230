const buttonOpen = document.getElementById("menu-open");
const buttonClose = document.getElementById("menu-close");
const menuContent = document.getElementById("menu-content");

function toggleMenu() {
    menuContent.classList.toggle("hidden");

    if (menuContent.classList.contains("hidden")) {
        menuContent.classList.remove("revealed");
        buttonOpen.classList.remove("invisible");
        buttonClose.classList.add("invisible");
    }
    else {

        menuContent.classList.add("revealed") //for a slide in effect
        buttonOpen.classList.add("invisible");
        buttonClose.classList.remove("invisible");
    }
}

document.getElementById("menu-open").onclick = toggleMenu;
document.getElementById("menu-close").onclick = toggleMenu;