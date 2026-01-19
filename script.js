// Get the signup form element
const signupForm = document.getElementById("signup-form");

// Get the login form element
const loginForm = document.getElementById("login-form");

// Function to validate the signup form
function validateSignupForm(event) {
  event.preventDefault();

  // Get form input values
  const username = signupForm.elements["signup-username"].value;
  const email = signupForm.elements["signup-email"].value;
  const password = signupForm.elements["signup-password"].value;
  const confirmPassword = signupForm.elements["signup-confirm-password"].value;

  // Validate username (should not be empty)
  if (!username.trim()) {
    alert("Please enter a valid username.");
    return;
  }

  // Validate email (should not be empty and should have @ symbol)
  if (!email.trim() || !email.includes("@")) {
    alert("Please enter a valid email address.");
    return;
  }

  // Validate password (should not be empty and should have at least 6 characters)
  if (!password || password.length < 6) {
    alert("Please enter a valid password (at least 6 characters).");
    return;
  }

  // Validate confirm password (should match password)
  if (password !== confirmPassword) {
    alert("Passwords do not match. Please re-enter your password.");
    return;
  }

  // If all validations pass, display a success message
  alert("Congratulations! Your account has been created successfully.");
}

// Function to validate the login form
function validateLoginForm(event) {
  event.preventDefault();

  // Get form input values
  const email = loginForm.elements["login-email"].value;
  const password = loginForm.elements["login-password"].value;

  // Validate email (should not be empty and should have @ symbol)
  if (!email.trim() || !email.includes("@")) {
    alert("Please enter a valid email address.");
    return;
  }

  // Validate password (should not be empty)
  if (!password) {
    alert("Please enter your password.");
    return;
  }

  // If all validations pass, display a success message
  alert("Welcome back! You are now logged in.");
}

// Add event listeners to the signup and login forms
signupForm.addEventListener("submit", validateSignupForm);
loginForm.addEventListener("submit", validateLoginForm);
