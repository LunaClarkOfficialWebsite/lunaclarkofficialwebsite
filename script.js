// Get the modal window and links
var modal = document.getElementById("signup-modal");
var links = document.querySelectorAll(".trigger-modal");

// Add event listeners to links
links.forEach(function(link) {
  link.addEventListener("click", function() {
    modal.style.display = "block";
  });
});

// Close modal when close button is clicked
document.querySelector(".close").addEventListener("click", function() {
  modal.style.display = "none";
});

// Close modal when user clicks outside the modal content
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

// Get the form element
var form = document.getElementById("signup-form");

// Add an event listener to the form submission
form.addEventListener("submit", function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Validate the form data (e.g., check if the email and password are valid)
  // ...

  // Submit the form data to your server for processing (e.g., create a new user account)
  // ...

  // If the submission is successful, hide the modal and display the actual content
  modal.style.display = "none";
  document.getElementById("actual-content").style.display = "block";
});
