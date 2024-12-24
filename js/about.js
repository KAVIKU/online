$(document).ready(function () {
  // Feedback Form Submission
  $("#feedbackForm").on("submit", function (e) {
    e.preventDefault(); // Prevent actual form submission
    const name = $("#name").val();
    const email = $("#email").val();
    const message = $("#message").val();

    // Check if all fields are filled
    if (name && email && message) {
      // Save feedback data to sessionStorage
      const feedbackData = {
        name: name,
        email: email,
        message: message
      };
      sessionStorage.setItem("feedback", JSON.stringify(feedbackData)); // Store feedback in sessionStorage

      // Display success message
      $("#feedback-message")
        .css("color", "green")
        .html(`Thank you for your feedback, ${name}!`);

      // Optionally, display feedback stored in sessionStorage (for testing or future use)
      console.log("Feedback Stored:", sessionStorage.getItem("feedback"));
    } else {
      $("#feedback-message")
        .css("color", "red")
        .html("Please fill out all fields before submitting.");
    }

    // Reset form fields
    $(this).trigger("reset");
  });

  // Toggling Hours Section
  $("#toggle-hours").on("click", function () {
    const options = {
      duration: 1000,
      easing: "swing",
      complete: () => {
        alert("Hours section toggled!");
      }
    };
    $(".about-hours").toggle(options);
  });

  // Add Focus Effect to Form Inputs
  $("#feedbackForm input, #feedbackForm textarea").on("focus", function () {
    $(this).addClass("focused-input");
  });

  $("#feedbackForm input, #feedbackForm textarea").on("blur", function () {
    $(this).removeClass("focused-input");
  });

  // Navigation Hover Effect
  $("header nav a").hover(
    function () {
      $(this).css("color", "#2ecc71");
    },
    function () {
      $(this).css("color", "");
    }
  );

  // Subscription Feature
  $("#subscribe-button").on("click", function () {
    const email = $("#subscribe-email").val().trim();

    // Validate email
    if (email === "") {
      alert("Please enter a valid email address.");
    } else if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
    } else {
      // Save subscription email to sessionStorage
      sessionStorage.setItem("subscriptionEmail", email);

      // Notify user of successful subscription
      alert(`Thank you for subscribing! We've sent a confirmation email to ${email}.`);

      // Optionally, clear the email input after subscription
      $("#subscribe-email").val("");
    }
  });

  // Email validation function (basic format check)
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('nav');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
  });
});
