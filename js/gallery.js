document.addEventListener("DOMContentLoaded", () => {
  // Cart Functionality
  const viewCartButton = document.getElementById("view-cart");
  const cartModal = document.getElementById("cart-modal");
  const cartItemsContainer = document.getElementById("cart-items");
  const totalPriceDisplay = document.getElementById("total-price");
  const processOrderButton = document.getElementById("process-order"); // New process order button
  const closeCartButton = document.getElementById("close-cart"); // Close button for modal
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  // Subscription Feature
  const subscribeButton = document.getElementById("subscribe-button");
  const subscribeEmailInput = document.getElementById("subscribe-email");

  // Retrieve cart from sessionStorage or initialize an empty cart
  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

  // Update Cart Count
  function updateCartCount() {
    viewCartButton.textContent = `View Cart (${cart.length})`;
  }

  // Update Cart Display
  function updateCartDisplay() {
    cartItemsContainer.innerHTML = ""; // Clear the cart items list
    let totalPrice = 0;

    cart.forEach((item, index) => {
      const li = document.createElement("li");
      li.classList.add("cart-item");

      // Display item name and price
      const itemDetails = document.createElement("span");
      itemDetails.textContent = `${item.name} - $${item.price}`;
      li.appendChild(itemDetails);

      // Remove button for each cart item
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.classList.add("remove-button");
      removeButton.addEventListener("click", () => {
        cart.splice(index, 1); // Remove the item from the cart
        sessionStorage.setItem("cart", JSON.stringify(cart)); // Update cart in sessionStorage
        updateCartDisplay();
        updateCartCount();
      });
      li.appendChild(removeButton);

      // Append the item to the cart display
      cartItemsContainer.appendChild(li);
      totalPrice += item.price; // Update the total price
    });

    // Update the total price display
    totalPriceDisplay.textContent = `Total: $${totalPrice.toFixed(2)}`;
  }

  // Add to Cart
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const product = event.target.closest(".gallery-item");
      const name = product.dataset.name;
      const price = parseFloat(product.dataset.price);

      // Add the item to the cart
      cart.push({ name, price });
      sessionStorage.setItem("cart", JSON.stringify(cart)); // Store updated cart in sessionStorage
      updateCartCount();
      updateCartDisplay();

      // Show confirmation message
      alert(`${name} has been added to your cart!`);
    });
  });

  // Open Cart Modal
  viewCartButton.addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    cartModal.classList.remove("hidden");
  });

  // Close Cart Modal
  closeCartButton.addEventListener("click", () => {
    cartModal.classList.add("hidden");
  });

  // Process Order Logic
  processOrderButton.addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Your cart is empty! Please add items before processing the order.");
      return;
    }

    // Calculate total price
    let totalPrice = 0;
    cart.forEach(item => totalPrice += item.price);

    // Simulate order confirmation (could be enhanced with real payment integration)
    alert(`Your order has been placed! Total amount: $${totalPrice.toFixed(2)}. Thank you for shopping with us!`);

    // Clear the cart after processing the order
    cart.length = 0;  // Reset cart
    sessionStorage.setItem("cart", JSON.stringify(cart)); // Update sessionStorage
    updateCartCount();
    updateCartDisplay();
  });

  // Subscription Feature Logic
  subscribeButton.addEventListener("click", () => {
    const email = subscribeEmailInput.value.trim();

    // Simple validation to check if the email input is empty or invalid
    if (email === "") {
      alert("Please enter a valid email address.");
    } else if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
    } else {
      // Notify the user of successful subscription
      alert(`Thank you for subscribing! We've sent a confirmation email to ${email}.`);

      // Optionally clear the input after subscription
      subscribeEmailInput.value = "";
    }
  });

  // Email validation function (basic format check)
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  }

  // Initialize the cart count and display on page load
  updateCartCount();
  updateCartDisplay();
});
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('nav');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
  });
});
document.getElementById('process-order').addEventListener('click', async () => {
  const cartItems = document.querySelectorAll('#cart-items li');
  const totalPrice = document.getElementById('total-price').textContent.split('$')[1];
  const customerPhone = document.getElementById('customer-phone').value;

  if (!customerPhone || !/^\d{10}$/.test(customerPhone)) {
    alert('Please enter a valid phone number.');
    return;
  }

  const orderDetails = Array.from(cartItems).map(item => item.textContent);

  try {
    const response = await fetch('http://localhost:3000/process-payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ orderDetails, totalPrice, customerPhone }),
    });

    const result = await response.json();
    if (result.success) {
      alert('Payment successful! Transaction ID: ' + result.transactionId);
    } else {
      alert('Payment failed: ' + result.error);
    }
  } catch (error) {
    console.error('Error processing payment:', error);
    alert('An error occurred while processing your payment.');
  }
});
