
function updateDrinkCount() {
if (localStorage.drinksMixed) {
    const drinksMixed = localStorage.drinksMixed;
    document.querySelector("#drink-count").innerHTML = `You have mixed <strong>${drinksMixed}</strong> smoothies.`;
}
else {
    document.querySelector("#drink-count").innerHTML = "<strong>You</strong> haven't made any fruit drinks yet!";
}
}
updateDrinkCount();