const endpoint = "https://kea-alt-del.dk/t7/api/products?limit=20";

const produktliste = document.querySelector(".produktliste");

fetch(endpoint)
  .then((res) => res.json())
  .then(visData);

function visData(json) {
  json.forEach((element) => {
    produktliste.innerHTML += `
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
