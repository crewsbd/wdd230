async function spotlights() {
    const url = "json/data.json";

    const request = await fetch(url);
    const businesses = (await request.json()).businesses;

    const directoryContent = document.querySelector("#directory-content");

    businesses.forEach(business => {
        
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
        busurllink.innerHTML=`<a href="http:////${business.url}" target="_blank">${business.url}</a>`
        busurl.appendChild(busurllink);
        
        const card = document.createElement("div");
        card.classList.add("card");
        card.appendChild(img);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(busurl);

        directoryContent.appendChild(card);
    }); 
}
spotlights();

document.querySelector("#gridview").addEventListener("click", e => {
    document.querySelector("#directory-content").classList.remove("listview");
    document.querySelector("#gridview").classList.add("selected");
    document.querySelector("#listview").classList.remove("selected");

})
document.querySelector("#listview").addEventListener("click", e => {
    document.querySelector("#directory-content").classList.add("listview");
    document.querySelector("#listview").classList.add("selected");
    document.querySelector("#gridview").classList.remove("selected");
})