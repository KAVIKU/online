document.addEventListener("DOMContentLoaded", () => {
  // Cart Counter Updates
  const viewCartButton = document.getElementById("view-cart");

  let cartCount = 0; // Cart item count placeholder

  function updateCartCount(count) {
    viewCartButton.textContent = `View Cart (${count})`;
  }

  // Simulating Add to Cart Feature for Demo
  const featuredItems = document.querySelectorAll(".gallery-item");

  featuredItems.forEach((item) => {
    item.addEventListener("click", () => {
      cartCount += 1; // Increment cart count
      updateCartCount(cartCount);
      alert("Item added to cart!"); // Simple feedback
    });
  });

  // Navigate to Gallery on View Cart Click
  viewCartButton.addEventListener("click", () => {
    window.location.href = "gallery.html";
  });

  // Subscribe Feature
  const subscribeButton = document.getElementById("subscribe-btn");

  subscribeButton.addEventListener("click", () => {
    const emailInput = document.getElementById("email").value;
    if (emailInput) {
      alert(`Thank you for subscribing! We've sent a confirmation email to ${emailInput}`);
    } else {
      alert("Please enter a valid email address to subscribe.");
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('nav');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
  });
});
