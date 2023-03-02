async function directory() {
    const url = "/chamber/json/data.json";

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
        busurl.innerHTML = `${business.url}`;
        
        const card = document.createElement("div");
        card.appendChild(img);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(busurl);

        directoryContent.appendChild(card);
        
    });
    
}
directory();