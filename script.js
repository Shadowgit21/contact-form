document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Clear previous errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";
  document.getElementById("successMessage").textContent = "";

  let isValid = true;

  // Validate name
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required";
    isValid = false;
  }

  // Validate email with regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required";
    isValid = false;
  } else if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email format";
    isValid = false;
  }

  // Validate message
  if (message === "") {
    document.getElementById("messageError").textContent = "Message is required";
    isValid = false;
  }

  // Show success
  if (isValid) {
    document.getElementById("successMessage").textContent = "Form submitted successfully!";
  }
});
