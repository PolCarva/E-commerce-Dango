const items = [
  { name: "Producto 1", image: "./assets/product01.png", price: 423.34 },
  { name: "Producto 2", image: "./assets/product02.png", price: 323.34 },
  { name: "Producto 3", image: "./assets/product03.png", price: 345.12 },
  { name: "Producto 4", image: "./assets/product04.png", price: 123.34 },
  { name: "Producto 5", image: "./assets/product01.png", price: 523.13 },
  { name: "Producto 6", image: "./assets/product02.png", price: 425.53 },
  { name: "Producto 7", image: "./assets/product03.png", price: 434.13 },
  { name: "Producto 8", image: "./assets/product04.png", price: 123.76 },
  { name: "Producto 9", image: "./assets/product01.png", price: 432.34 },
  { name: "Producto 10", image: "./assets/product02.png", price: 123.0 },
  { name: "Producto 11", image: "./assets/product03.png", price: 123.34 },
  { name: "Producto 12", image: "./assets/product04.png", price: 572.23 },
  { name: "Producto 13", image: "./assets/product01.png", price: 234.53 },
  { name: "Producto 14", image: "./assets/product02.png", price: 644.12 },
  { name: "Producto 15", image: "./assets/product03.png", price: 123.64 },
];

document.addEventListener("DOMContentLoaded", function () {
  // Inicializar Swiper para Texto
  const textSwiper = new Swiper(".swiper-container-1", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
    },

    // Navigation arrows
    navigation: {
      nextEl: "#next_hero_slide",
      prevEl: "#prev_hero_slide",
    },
  });

  // Inicializar Swiper para Imágenes
  const imgSlider = new Swiper(".swiper-container-2", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    effect: "fade",
    speed: 1000,
    autoplay: {
      delay: 5000,
    },
    // Navigation arrows
    navigation: {
      nextEl: "#next_hero_slide",
      prevEl: "#prev_hero_slide",
    },
  });

  // Inicializar Swiper para Productos
  const productSwiperEl = document.querySelector(".myProductSwiper");
  const productSwiper = new Swiper(productSwiperEl, {
    spaceBetween: 30,
    slidesPerView: 2,
    slidesPerGroup: 8,
    grid: {
      rows: 4,
      fill: "row",
    },
    navigation: {
      nextEl: "#next_page",
      prevEl: "#prev_page",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
        slidesPerGroup: 8,
        grid: {
          rows: 2,
          fill: "row",
        },
      },
    },
  });
  const swiperWrapper = productSwiperEl.querySelector(".swiper-wrapper");
  items.forEach((item) => {
    const slide = document.createElement("div");
    slide.className =
      "swiper-slide !mt-2 md:!mt-8 p-3 shadow-xl w-fit rounded-xl flex flex-col items-center justify-center gap-2";
    slide.dataset.name = item.name;
    slide.dataset.price = item.price;
    slide.innerHTML = `
            <img class="object-cover w-full aspect-[3/4]" src="${
              item.image
            }" alt="${item.name}">
            <div class="w-full flex flex-col gap-2 lg:flex-row md:gap-0 pt-2 justify-between">
                <span class="text-black text-lg">$${item.price.toFixed(
                  2
                )}</span>
              <button class="bg-primary transition text-white px-2 buy_now_button uppercase rounded-full hover:bg-[#8ece61] shadow-md active:shadow-inner active:translate-y-0.5">buy Now</button>
            </div>
        `;
    swiperWrapper.appendChild(slide);
  });

  productSwiper.update(); // Actualiza el swiper para que reconozca los nuevos slides

  /* Cart */

  const cartBtn = document.getElementById("cart-btn");
  const cartModal = document.getElementById("cart-modal");
  const closeCart = document.getElementById("close-cart");
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Función para actualizar el total
  function updateCartTotal() {
    let total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    cartTotal.innerText = `$${total.toFixed(2)}`;
  }
  
  // Función para guardar el carrito en localStorage
  function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  // Función para mostrar los items en el carrito o mensaje de carrito vacío
  function displayCart() {
    cartItems.innerHTML = "";
    if (cart.length === 0) {
      cartItems.innerHTML = `<div class="text-center p-4"><p>Tu carrito está vacío :(<span class="block font-bold">¡Ve a comprar!<span><p></div>`;
    } else {
      cart.forEach((item) => {
        const itemElement = document.createElement("div");
        itemElement.innerHTML = `
          <div class="flex justify-between items-center">
            <span>${item.name} - $${item.price} x ${item.quantity}</span>
            <button class="text-red-500/50 transition hover:text-red-500" onclick="removeFromCart('${item.name}')">Remove</button>
          </div>`;
        cartItems.appendChild(itemElement);
      });
    }
  }

  // Función para añadir productos al carrito
  document.querySelectorAll(".buy_now_button").forEach((button) => {
    button.addEventListener("click", function () {
      const name = this.parentNode.parentNode.dataset.name;
      const price = parseFloat(this.parentNode.parentNode.dataset.price);
      const product = { name, price, quantity: 1 };

      const existingItem = cart.find((item) => item.name === product.name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        cart.push(product);
      }

      displayCart();
      saveCart();
    });
  });

  // Función para eliminar productos del carrito
  window.removeFromCart = function (name) {
    const itemIndex = cart.findIndex((item) => item.name === name);
    if (itemIndex > -1) {
      cart[itemIndex].quantity--;
      if (cart[itemIndex].quantity <= 0) {
        cart.splice(itemIndex, 1);
      }
    }
    displayCart();
    saveCart();
  };

  // Abrir y cerrar el modal del carrito
  cartBtn.addEventListener("click", () => {
    cartModal.classList.remove("hidden");
    displayCart();
  });
  closeCart.addEventListener("click", () => cartModal.classList.add("hidden"));

  /* Menu */
  const menuBtn = document.getElementById("menuBtn");
  const menuItems = document.getElementById("menuItems");

  menuBtn.addEventListener("click", function () {
    menuItems.classList.toggle("-translate-x-full");
  });
});
