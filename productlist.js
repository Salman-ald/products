const cat = new URLSearchParams(window.location.search).get("cat");

const endpoint = `https://kea-alt-del.dk/t7/api/products?category=${cat}`;

const produktliste = document.querySelector(".produktliste");


const h2 = document.querySelector("h2")
h2.textContent = cat;

fetch(endpoint)
  .then((res) => res.json())
  .then(visData);

function visData(json) {
  json.forEach((element) => {
    produktliste.innerHTML += `
    <a href="productdetails.html?id=${element.id}" class="product-link">  
    <article class="card">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" alt="produktbillede">
        <info><h2>${element.brandname}</h2>
        <h3>${element.productdisplayname}</h3>
        <p>${element.price} kr.</p></info>
      </article>`;
  });
}

const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("open");

  const isOpen = menu.classList.contains("open");

  burger.setAttribute("aria-expanded", isOpen);
});
