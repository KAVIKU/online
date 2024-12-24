let cart = [];
const cartCount = document.getElementById("cart-count");

// Function to update cart count
function updateCartCount() {
  cartCount.textContent = cart.length;
}

// Function to add an item to the cart
function addToCart(itemName, itemPrice) {
  const item = { name: itemName, price: parseFloat(itemPrice) };
  cart.push(item);
  updateCartCount();
  alert(`${itemName} has been added to your cart!`);
}

// Attach event listeners to all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const name = button.getAttribute("data-name");
    const price = button.getAttribute("data-price");
    addToCart(name, price);
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('nav');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
  });
});
