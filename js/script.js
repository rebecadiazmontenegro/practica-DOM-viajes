
import favoritos from "./favoritos.js" 
import cities from "./cities.js" 


const cards = document.getElementById("cards");

for(let i = 0; i < favoritos.length; i++) {
    const divCard = document.createElement("div");
    const atributo = document.createAttribute("class");
    atributo.value = "card";
    divCard.setAttributeNode(atributo);

    const img = document.createElement("img");
    img.src = favoritos[i].url_img;
    img.alt = favoritos[i].title;

    const h3 = document.createElement("h3");
    h3.textContent = favoritos[i].title;

    const p = document.createElement("p");
    p.textContent = favoritos[i].description;

    divCard.append(img);
    divCard.append(h3);
    divCard.append(p);
    cards.appendChild(divCard);
}

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