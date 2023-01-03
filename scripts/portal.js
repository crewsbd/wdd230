const currentDate = new Date();
const currentYear = currentDate.getFullYear();

document.querySelector("#year").innerText = currentYear;
document.getElementById("last-updated").innerText = document.lastModified;