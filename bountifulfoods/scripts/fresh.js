async function queryFruit() {
    const url = "json/fruit.json";

    const request = await fetch(url);
    const fruits = (await request.json());

    const fruit1 = document.querySelector("#fruit1");
    const fruit2 = document.querySelector("#fruit2");
    const fruit3 = document.querySelector("#fruit3");

    fruits.forEach(fruit => {

        const name = fruit.name;
        const newOption1 = document.createElement("option");
        const newOption2 = document.createElement("option");
        const newOption3 = document.createElement("option");

        newOption1.textContent = name;
        newOption2.textContent = name;
        newOption3.textContent = name;

        fruit1.appendChild(newOption1);
        fruit2.appendChild(newOption2);
        fruit3.appendChild(newOption3);

    });
    function getValue(fieldName, targetFruit) {
        for (i = 0; i < fruits.length; i++) {
            if (fruits[i].name == targetFruit) {
                return fruits[i].nutritions[fieldName];
            }
        }
    }
    function sum(fieldName, fruitName1, fruitName2, fruitName3) {
        let sum = 0;
        sum += getValue(fieldName, fruitName1);
        sum += getValue(fieldName, fruitName2);
        sum += getValue(fieldName, fruitName3);
        return sum;
    }

    function save(event) {

        if (document.querySelector("#drink-form").checkValidity()) {
            console.log("Pushed it!");
            const drinkOutput = document.querySelector("#drink-output");

            const fruitName1 = document.querySelector("#fruit1").value;
            const fruitName2 = document.querySelector("#fruit2").value;
            const fruitName3 = document.querySelector("#fruit3").value;

            const carbs = sum("carbohydrates", fruitName1, fruitName2, fruitName3);
            const prot = sum("protein", fruitName1, fruitName2, fruitName3);
            const fat = sum("fat", fruitName1, fruitName2, fruitName3);
            const sugar = sum("sugar", fruitName1, fruitName2, fruitName3);
            const calories = sum("calories", fruitName1, fruitName2, fruitName3);

            const dateStamp = Intl.DateTimeFormat("en-UK", {
                dateStyle: "full"
            }).format(Date.now());

            drinkOutput.innerHTML = `<div><strong>${document.querySelector("#df-name").value}</strong></div>
                <div>${document.querySelector("#df-phone").value}</div>
                <div>${document.querySelector("#df-email").value}</div>
                <div id="fruitnames">
                <span></span><span>${fruitName1}</span> - <span>${fruitName2}</span> - <span>${fruitName3}</span>
                </div>
                <div id="drinkstats">
                <span>Carbs</span><span>${Math.floor(carbs)}</span>
                <span>Protein</span><span>${Math.floor(prot)}</span>
                <span>Fat</span><span>${Math.floor(fat)}</span>
                <span>Sugar</span><span>${Math.floor(sugar)}</span>
                <span>Calories</span><span>${Math.floor(calories)}</span>
                </div>
                <div>
                ${document.querySelector("#df-inst").value}
                </div>
                <div>
                Order Date: ${dateStamp}
                </div>`;
            if (localStorage.drinksMixed) {
                localStorage.drinksMixed = parseInt(localStorage.drinksMixed) + 1;
            }
            else {
                localStorage.drinksMixed = 1;
            }
            updateDrinkCount();
        }
    }

    const saveButton = document.querySelector("#savebutton");
    saveButton.addEventListener("click", save);
}

queryFruit();