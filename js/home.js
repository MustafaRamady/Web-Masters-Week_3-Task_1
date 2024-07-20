// let products = [
//   { title: "product_1", price: 50, img: "../imgs/product-1.png" },
//   { title: "product_2", price: 50, img: "../imgs/product-2.png" },
//   { title: "product_3", price: 50, img: "../imgs/product-3.png" },
//   { title: "product_4", price: 50, img: "../imgs/product-4.JPG" },
//   { title: "product_5", price: 50, img: "../imgs/product-5.JPG" },
//   { title: "product_6", price: 50, img: "../imgs/img-grid-3.jpg" },
//   { title: "product_7", price: 50, img: "../imgs/normal.jpg" },
//   { title: "product_8", price: 50, img: "../imgs/sofa.png" },
//   { title: "product_9", price: 50, img: "../imgs/twist-chair.jpg" },
// ];

// window.localStorage.clear();
// let myProducts;

// function store(e) {
//   console.log(e);
// }
// for (let i = 0; i < products.length; i++) {
//   document.querySelector(".containerProducts").innerHTML += `
//  <div class="card">
//     <img src=${products[i].img} alt="" >
//     <div>
//         <h2>${products[i].title}</h2>
//         <h3>${products[i].price}$</h3>
//     </div>
//     <i class="fa-solid fa-cart-shopping"></i>
// </div>
//     `;
// }

// document.querySelector("header span").innerHTML = JSON.parse(
//   window.localStorage.Prodcuts
// ).length;

// document.querySelector("header div ").onclick = () => {
//   document.querySelector(".containerProducts").style.display = "none";
//   document.querySelector("header h1").innerHTML = "Cart";
//   document.querySelector("header div").style.display = "none";
//   document.querySelector(".containerCart").style.display = "grid";
//   document.querySelector(".containerCart").style.gridTemplateColumns =
//     "repeat(3 , auto)";
//   document.querySelector(".containerCart").style.gridGap = "40px";
//   document.querySelector(".containerCart").style.padding = "40px 0px";
// };

// for (let i = 0; i < myProducts.length; i++) {
//   document.querySelector(".containerCart").innerHTML += `
//    <div class="card">
//       <img src=${myProducts[i].img} alt="">
//       <div>
//           <h2>${myProducts[i].title}</h2>
//           <h3>${myProducts[i].price}$</h3>
//       </div>
//   </div>
//       `;
// }

// products.map((ele) => {
//   document.querySelector(".container").innerHTML += `
//     <div class="card">
//         <img src=${ele.img} alt="">
//         <div>
//             <h2>${ele.title}</h2>
//             <h3>${ele.price}$</h3>
//         </div>
//         <i class="fa-solid fa-cart-shopping" onclick=${store(ele)} ></i>
//     </div>
//     `;
// });
// window.localStorage.clear();
// let myProducts;
// window.localStorage.Prodcuts != null
//   ? (myProducts = JSON.parse(window.localStorage.Prodcuts))
//   : (myProducts = []);

// for (let i = 0; i < products.length; i++) {
//   document.querySelector(".containerProducts").innerHTML += `
//  <div class="card">
//     <img src=${products[i].img} alt="">
//     <div>
//         <h2>${products[i].title}</h2>
//         <h3>${products[i].price}$</h3>
//     </div>
//     <i class="fa-solid fa-cart-shopping" ></i>
// </div>
//     `;
// }
// window.localStorage.clear();

let dataProduct;
if (window.localStorage.Products != null) {
  dataProduct = JSON.parse(window.localStorage.Products);
} else {
  dataProduct = [];
}
document.querySelectorAll(".card i").forEach((ele) => {
  ele.onclick = () => {
    let newProduct = {
      title: ele.previousElementSibling.firstElementChild.textContent,
      price: ele.previousElementSibling.lastElementChild.textContent,
      img: ele.parentElement.firstElementChild.getAttribute("src"),
    };
    dataProduct.push(newProduct);
    window.localStorage.setItem("Products", JSON.stringify(dataProduct));
  };
});

document
  .querySelector("header span")
  .appendChild(document.createTextNode(dataProduct.length));

let total = 0;
for (let i = 0; i < dataProduct.length; i++) {
  total += +dataProduct[i].price;
  document.querySelector(".containerCart").innerHTML += `
     <div class="card">
        <img src=${dataProduct[i].img} alt="">
        <div>
            <h2>${dataProduct[i].title}</h2>
            <h3>${dataProduct[i].price}$</h3>
        </div>
    </div>
        `;
}
document.querySelector("header > div div ").onclick = () => {
  let totalElement = document.createElement("h3");
  let totalText = document.createTextNode(`Total : ${total}`);
  totalElement.appendChild(totalText);
  document.querySelector(".containerProducts").style.display = "none";
  document.querySelector("header h1").innerHTML = "Cart";
  document.querySelector("header div").style.display = "none";
  document.querySelector("header").appendChild(totalElement);
  document.querySelector("header button").style.display = "block";
  document.querySelector(".containerCart").style.display = "grid";
  document.querySelector(".containerCart").style.gridTemplateColumns =
    "repeat(3 , auto)";
  document.querySelector(".containerCart").style.gridGap = "40px";
  document.querySelector(".containerCart").style.padding = "40px 0px";
};

document.querySelector("header button").onclick = () => {
  window.localStorage.removeItem("Products");
};

function logout() {
  window.location = "index.html";
}
document.querySelector("#logout").onclick = () => {
  setTimeout(logout, 3000);
  alert("You are welcome");
};
