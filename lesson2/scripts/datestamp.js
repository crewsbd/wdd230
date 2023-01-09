const currentDate = new Date();
const currentYear = currentDate.getFullYear();

document.querySelector("#year-field").innerText = currentYear;
document.querySelector("#last-update-field").innerText = document.lastModified;