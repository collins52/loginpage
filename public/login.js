let signupbtn = document.getElementById("signupbtn");
let signinbtn = document.getElementById("signinbtn");
let namefield = document.getElementById("namefield");
let title = document.getElementById("title");
let errorMessage = document.getElementById("error-message");
let conFirm = document.getElementById("confirm");

    signupbtn.addEventListener("click", function(){
    signup()
})
    signinbtn.addEventListener("click", function(){
    signin()
})

function signin(){
        namefield.style.maxHeight = "0";
        title.innerHTML = "Sign In";
        signinbtn.classList.remove("disable")
        signupbtn.classList.add("disable")
        conFirm.style.display = "none";

}

function signup(){
    namefield.style.maxHeight = "65px";
    title.innerHTML = "Sign Up";
    signinbtn.classList.add("disable")
    signupbtn.classList.remove("disable")
    conFirm.style.display = "block"
    
}

// Variables for elements
// let signupbtn = document.getElementById("signupbtn");
// let signinbtn = document.getElementById("signinbtn");
// let namefield = document.getElementById("namefield");
// let title = document.getElementById("title");
// let errorMessage = document.getElementById("error-message");

// // Flags to track toggle behavior
// let isToggling = false; // Initially, not in toggle mode

// // Event listeners for sign up and sign in buttons
// signupbtn.addEventListener("click", function() {
//     // If not in toggle mode and the name input is empty, display an error message
//     if (!isToggling && namefield.value.trim() === "") {
//         displayErrorMessage("Name is required for sign up.");
//     } else {
//         signup(); // Proceed with sign up
//     }
// });

// signinbtn.addEventListener("click", function() {
//     // If not in toggle mode and the email and password inputs are empty, display an error message
//     if (!isToggling && (namefield.value.trim() === "" || emailfield.value.trim() === "" || passwordfield.value.trim() === "")) {
//         displayErrorMessage("Name, email, and password are required for sign in.");
//     } else {
//         signin(); // Proceed with sign in
//     }
// });

// Function to display an error message
function displayErrorMessage(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
    setTimeout(function() {
        errorMessage.style.display = "none";
    }, 3000); // Hide the error message after 3 seconds
}

// // Function to toggle between sign up and sign in
// function toggle() {
//     isToggling = !isToggling; // Toggle the isToggling flag
//     // Implement your toggle behavior here
//     signupbtn.addEventListener("click", function(){
//         signup()
//     })
//         signinbtn.addEventListener("click", function(){
//         signin()
//     })
// }

// // Your signin and signup functions as before
// function signin() {
//     // ...
// }

// function signup() {
//     // ...
// }
