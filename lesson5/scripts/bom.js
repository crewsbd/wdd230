console.log("bom.js start");
const button = document.querySelector("button");
const input = document.querySelector("#favchap");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
    if (input.value.length > 0) {
        let newLi = document.createElement("li");
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        deleteButton.ariaLabel = `Delete ${input.value} item.`;
        deleteButton.addEventListener("click", () => {
            newLi.remove();
            input.focus();
        });
        newLi.textContent = input.value;
        newLi.appendChild(deleteButton);
        list.appendChild(newLi);
        input.value = "";
        input.focus();
    }
});

document.addEventListener("keypress", (e) => {
    console.log(e.key);
    if (e.key == "Enter") {
        button.dispatchEvent(new Event("click"));
    }
});


console.log("bom.js end");
