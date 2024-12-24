// Cart functionality
let cart = [];

// Add item to cart
function addToCart(itemName) {
  cart.push(itemName);
  alert(`${itemName} added to your cart!`);
}

// View cart
function viewCart() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
  } else {
    alert(`Your cart contains: ${cart.join(', ')}`);
  }
}

// Form validation
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    alert('Form submitted successfully!');
  });
});
