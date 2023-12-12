let signupbtn = document.getElementById("signupbtn");
let signinbtn = document.getElementById("signinbtn");
let namefield = document.getElementById("namefield");
let title = document.getElementById("title");
let errorMessage = document.getElementById("error-message");

// Flag to track toggle behavior
let isToggling = false; // Initially, not in toggle mode

// Event listeners for sign up and sign in buttons
signupbtn.addEventListener("click", function() {
    if (!isToggling) {
        signup(); // Proceed with sign up
    } else {
        toggle(); // Toggle the form
    }
});

signinbtn.addEventListener("click", function() {
    if (!isToggling) {
        signin(); // Proceed with sign in
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
    // Implement your toggle behavior here
    signupbtn.addEventListener("click", function(){
            signup()
        })
            signinbtn.addEventListener("click", function(){
            signin()
        })
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