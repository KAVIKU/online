// Random Quotes
const quotes = [
    "A reader lives a thousand lives before he dies.",
    "Books are a uniquely portable magic.",
    "So many books, so little time.",
    "Reading gives us someplace to go when we have to stay where we are.",
    "You can never get a cup of tea large enough or a book long enough to suit me."
  ];
  
  const generateQuoteButton = document.getElementById("generate-quote");
  const quoteDisplay = document.getElementById("quote-display");
  
  if (generateQuoteButton && quoteDisplay) {
    generateQuoteButton.addEventListener("click", () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      quoteDisplay.textContent = quotes[randomIndex];
    });
  }
  
  // Feedback Form Submission
  const feedbackForm = document.getElementById("feedback-form");
  const feedbackMessage = document.getElementById("feedback-message");
  
  if (feedbackForm && feedbackMessage) {
    feedbackForm.addEventListener("submit", (event) => {
      event.preventDefault();
  
      // Simulate feedback submission
      const name = document.getElementById("name").value;
      feedbackMessage.textContent = `Thank you for your feedback, ${name}!`;
  
      // Clear the form
      feedbackForm.reset();
    });
  }
  document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('nav');
  
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('nav-active');
    });
  });
  