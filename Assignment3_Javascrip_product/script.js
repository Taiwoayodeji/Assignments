const products = [
  {
    name: "Apple iPhone 16 Plus 128GB - Ultramarine",
    price: "$929.89",
    image: "/Assignment3_Javascrip_product/images/e.png",
  },
  {
    name: "Apple iPhone 15 Pro 256GB - White Titanium",
    price: "$807.37",
    image: "/Assignment3_Javascrip_product/images/w.png",
  },
  {
    name: "Apple iPhone 16 Pro 128GB - Desert Titanium",
    price: "$999.95",
    image: "/Assignment3_Javascrip_product/images/q.png",
  },
];

function loadProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;

    const name = document.createElement("h2");
    name.textContent = product.name;

    const price = document.createElement("p");
    price.textContent = product.price;

    productDiv.appendChild(img);
    productDiv.appendChild(name);
    productDiv.appendChild(price);

    productList.appendChild(productDiv);
  });
}

document
  .getElementById("load-products")
  .addEventListener("click", loadProducts);
