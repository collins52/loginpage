// Variables for elements
let signupbtn = document.getElementById("signupbtn");
let signinbtn = document.getElementById("signinbtn");
let namefield = document.getElementById("namefield");
let emailfield = document.getElementById("emailfield"); // Assuming you have an email input field
let passwordfield = document.getElementById("passwordfield"); // Assuming you have a password input field
let title = document.getElementById("title");
let errorMessage = document.getElementById("error-message");

// Flags to track toggle behavior and user action
let isToggling = false; // Initially, not in toggle mode
let userAction = false; // Initially, no user action

// Event listeners for sign up and sign in buttons
signupbtn.addEventListener("click", function() {
    if (!isToggling) {
        userAction = true;
    } else {
        toggle(); // Toggle the form
    }
});

signinbtn.addEventListener("click", function() {
    if (!isToggling) {
        userAction = true;
    } else {
        toggle(); // Toggle the form
    }
});

// Function to display an error message
function displayErrorMessage(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
    setTimeout(function() {
        errorMessage.style.display = "none";
    }, 3000); // Hide the error message after 3 seconds
}

// Function to toggle between sign up and sign in
function toggle() {
    isToggling = !isToggling; // Toggle the isToggling flag
    if (userAction) {
        userAction = false;
        if ((namefield.value.trim() === "" || emailfield.value.trim() === "" || passwordfield.value.trim() === "")) {
            displayErrorMessage("Name, email, and password are required.");
        } else {
            visitLink(); // Proceed with signup or signin
        }
    }
}

// Function to visit the link attached to signup
function visitLink() {
    // Implement the logic to visit the link attached to signup
    window.location.href = "https://github.com/collins52/loginpage";
}

// Your signin and signup functions as before
function signin() {
    // ...
    namefield.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signinbtn.classList.remove("disable")
    signupbtn.classList.add("disable")
}

function signup() {
    // ...
    namefield.style.maxHeight = "65px";
    title.innerHTML = "Sign Up";
    signinbtn.classList.add("disable")
    signupbtn.classList.remove("disable")
}
