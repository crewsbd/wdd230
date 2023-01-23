let buttonOpen = document.getElementById("hamburgerBtn");
let buttonClose = document.getElementById("hamburgerX")
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    if(document.getElementById("primaryNav").classList.contains("open")) {
        buttonOpen.classList.add("hidden");
        buttonClose.classList.remove("hidden"); }
    else {
        buttonOpen.classList.remove("hidden");
        buttonClose.classList.add("hidden");  }
    console.log("Click-eth-ed");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;
document.getElementById("hamburgerX").onclick = toggleMenu;