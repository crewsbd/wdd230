const spotlight1 = document.querySelector(".spotlight1").children[0];
const spotlight2 = document.querySelector(".spotlight2").children[0];
const spotlight3 = document.querySelector(".spotlight3").children[0];

async function spotlights() {
    const url = "json/data.json";

    const request = await fetch(url);
    const businesses = (await request.json()).businesses;

    const goldBusinesses = getGolds(businesses);
    const randomSort = getRandomItems(goldBusinesses, 3);

    spotlight1.innerHTML = `<h2>${randomSort[0].name}</h2>`;
    spotlight2.innerHTML = `<h2>${randomSort[1].name}</h2>`;
    spotlight3.innerHTML = `<h2>${randomSort[2].name}</h2>`;

    //Future reference---
    /*businesses.forEach(business => {

        const img = document.createElement("img");
        img.setAttribute("src", business.imgurl);
        img.setAttribute("alt", business.name);
        img.setAttribute("height", "100");

        const address = document.createElement("div");
        address.innerHTML = `${business.street1}<br>${business.street2}`;

        const phone = document.createElement("div");
        phone.innerHTML = `${business.phone}`;

        const busurl = document.createElement("div");
        const busurllink = document.createElement("a");
        busurllink.innerHTML = `<a href="http:////${business.url}" target="_blank">${business.url}</a>`
        busurl.appendChild(busurllink);

        const card = document.createElement("div");
        card.classList.add("card");
        card.appendChild(img);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(busurl);

        directoryContent.appendChild(card);
    } 
    ); */
}
function getRandomItems(items, count) {
    const shuffled = [...items].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}
function getGolds(businesses) {
    return businesses.filter((business) => {
        if (business.level == "Gold") {
            return true;
        }
    })

}
spotlights();
