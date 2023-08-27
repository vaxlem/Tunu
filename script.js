
const password = "hermon";

function checkPassword() {
  const enteredPassword = document.getElementById("passwordField").value;
  if (enteredPassword === password) {
    
    // If the entered password is correct, show the main content
    document.getElementById("passwordPrompt").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
  } else {
    
    
    // If the entered password is incorrect, show an error message
    document.getElementById("passwordError").style.display = "block";
  }
}    

// eye toggle


function togglePasswordVisibility() {
const passwordField = document.getElementById("passwordField");
const icon = document.querySelector(".togglePassword i");

if (passwordField.type === "password") {
  passwordField.type = "text";
  icon.classList.remove("fa-eye");
  icon.classList.add("fa-eye-slash");
} else {
  passwordField.type = "password";
  icon.classList.remove("fa-eye-slash");
  icon.classList.add("fa-eye");
}
}

// Handle Enter key press on the password input field
document.getElementById("passwordField").addEventListener("keypress", function(event) {
if (event.key === "Enter") {
  checkPassword();
}
});

