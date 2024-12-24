// Feedback Form Submission
document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    // Simple form validation
    if (!name || !email || !message) {
      alert("Please fill in all the fields!");
      return;
    }
  
    // Simulate form submission
    alert(`Thank you, ${name}! Your feedback or custom order has been received.`);
    // Clear the form
    this.reset();
  });
  