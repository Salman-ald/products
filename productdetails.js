const params = new URLSearchParams(window.location.search);

const id = params.get("id");

const endpoint = `https://kea-alt-del.dk/t7/api/products/${id}`;

const productDetails = document.querySelector(".product-details");

fetch(endpoint)
  .then((res) => res.json())
  .then((product) => {
    console.log(product);

    productDetails.innerHTML = `
      <article class="single-product">
        <img
          src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
          alt="${product.productdisplayname}"
        >

        <div class="product-info">
          <p>${product.brandname}</p>
          <h1>${product.productdisplayname}</h1>
          <p>${product.category}</p>
          <p>${product.articletype}</p>
          <p>${product.gender}</p>
          <h2>${product.price} kr.</h2>
        </div>
      </article>
    `;
  });