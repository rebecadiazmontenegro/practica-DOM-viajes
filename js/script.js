
import favoritos from "./favoritos.js" 
import cities from "./cities.js" 

// ----- Cards ----- //

const cards = document.getElementById("cards");

for(let i = 0; i < favoritos.length; i++) {
    const articleCard = document.createElement("article");
    const atributo = document.createAttribute("class");
    atributo.value = "card";
    articleCard.setAttributeNode(atributo);

    const img = document.createElement("img");
    img.src = favoritos[i].url_img;
    img.alt = favoritos[i].title;

    const h3 = document.createElement("h3");
    h3.textContent = favoritos[i].title;

    const p = document.createElement("p");
    p.textContent = favoritos[i].description;

    articleCard.append(img);
    articleCard.append(h3);
    articleCard.append(p);
    cards.appendChild(articleCard);
}

// ----- Selector ----- //

const selector = document.getElementById("selector");

const select = document.createElement("select");

const atributo2 = document.createAttribute("id");
atributo2.value = "cities";
select.setAttributeNode(atributo2);


for (let i = 0; i < cities.length; i++) {
    const option = document.createElement ("option");
    option.textContent= cities[i];
    
    const value = document.createAttribute("value");
    value.value = cities[i];
    option.setAttributeNode(value);

    select.appendChild(option)
    selector.appendChild(select);
}