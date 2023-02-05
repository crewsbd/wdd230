const day = new Date().getDay();
const header = document.querySelector("header");

const dayOfTheWeek = [
    "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
];

if(dayOfTheWeek[day] == "Monday" | dayOfTheWeek[day] == "Tuesday") {
    const alertBanner = document.createElement("div");
    alertBanner.innerHTML = '<span>🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.</span>';
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<img src="images/close-icon.svg" alt="close alert" width="20" height="20">'
    alertBanner.appendChild(deleteButton);
    alertBanner.classList.add("alert");
    header.prepend(alertBanner);
    deleteButton.addEventListener("click", () => {
        alertBanner.remove();    
});
}