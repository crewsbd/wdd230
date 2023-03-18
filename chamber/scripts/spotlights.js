const spotlight1 = document.querySelector(".spotlight1").children[0];
const spotlight2 = document.querySelector(".spotlight2").children[0];
const spotlight3 = document.querySelector(".spotlight3").children[0];

async function spotlights() {
    const url = "json/data.json";

    const request = await fetch(url);
    const businesses = (await request.json()).businesses;

    const goldBusinesses = getGolds(businesses);
    const randomSort = getRandomItems(goldBusinesses, 3);

    spotlight1.innerHTML = `<h2>${randomSort[0].name}</h2><img src="${randomSort[0].imgurl}"><p>${randomSort[0].street1}<br>${randomSort[0].street2}<br><a href="http://${randomSort[0].url}" target="_blank">${randomSort[0].url}</a></p>`;
    spotlight2.innerHTML = `<h2>${randomSort[1].name}</h2><img src="${randomSort[1].imgurl}"><p>${randomSort[1].street1}<br>${randomSort[1].street2}<br><a href="http://${randomSort[1].url}" target="_blank">${randomSort[1].url}</a></p>`;
    spotlight3.innerHTML = `<h2>${randomSort[2].name}</h2><img src="${randomSort[2].imgurl}"><p>${randomSort[2].street1}<br>${randomSort[2].street2}<br><a href="http://${randomSort[2].url}" target="_blank">${randomSort[2].url}</a></p>`;

    spotlight1.parentElement.style.backgroundImage = `radial-gradient(rgba(0,0,0,0) 70%, rgba(0,0,0,.1)), url(images/directory/${randomSort[0].bg}bg_400.webp)`;
    spotlight2.parentElement.style.backgroundImage = `radial-gradient(rgba(0,0,0,0) 70%, rgba(0,0,0,.1)), url(images/directory/${randomSort[1].bg}bg_400.webp)`;
    spotlight3.parentElement.style.backgroundImage = `radial-gradient(rgba(0,0,0,0) 70%, rgba(0,0,0,.1)), url(images/directory/${randomSort[2].bg}bg_400.webp)`;


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
