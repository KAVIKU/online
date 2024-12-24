// Placeholder for interactive features
document.getElementById("view-cart").addEventListener("click", () => {
    alert("Shopping cart feature coming soon!");
});
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('nav');
  
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('nav-active');
    });
  });
  