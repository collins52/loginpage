// Variables for elements
let signupbtn = document.getElementById("signupbtn");
let signinbtn = document.getElementById("signinbtn");
let namefield = document.getElementById("namefield");
let title = document.getElementById("title");
let errorMessage = document.getElementById("error-message");
var signInCount = 0;
var signUpCount = 0;

//////////////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION TO DISPLAY ERROR MESSAGE
function displayErrorMessage() {
    console.log("this form is empty")
    // errorMessage.textContent = message;
    errorMessage.style.display = "block";
    setTimeout(function() {
        errorMessage.style.display = "none";
    }, 2000); // Hide the error message after 3 seconds
}

/////////////////////////////////////////////////////////////////////////////////////////////////
// FUNCTION TO SIGNIN AND SIGNUP...
function signin(){
        namefield.style.maxHeight = "0";
        title.innerHTML = "Sign In";
        signinbtn.classList.remove("disable")
        signupbtn.classList.add("disable")
}

function signup(){
    namefield.style.maxHeight = "65px";
    title.innerHTML = "Sign Up";
    signinbtn.classList.add("disable")
    signupbtn.classList.remove("disable")
}

//////////////////////////////////////////////////////////////////////////////////////////////////

//FUNCTION TO CHECK IF FORM IS EMPTY

function isSignUpFormEmpty(){
    const nameValue = document.querySelector('input[name="name"]').value; // the input[name="username, email, password"] selects the exacts input type. 
    const emailValue = document.querySelector('input[name="email"]').value;
    const passwordValue = document.querySelector('input[name="password"]').value;
    return nameValue.trim() === '' && emailValue.trim() === '' && passwordValue.trim() === '';
}

function isSigninFormEmpty(){
    const emailValue = document.querySelector('input[name="email"]').value;
    const passwordValue = document.querySelector('input[name="password"]').value;
    return emailValue.trim() === '' && passwordValue.trim() === '';
}

//////////////////////////////////////////////////////////////////////////////////////////////////////

// Function for proper control flow

signinbtn.addEventListener("click", function(){
    signInCount++
    signUpCount = 0
   if(signInCount === 1){
    signin()
   }else if(signInCount > 1){
    if(isSigninFormEmpty()){
        displayErrorMessage()
    }else{
        alert("signinsuccessful")
    }
   }
})

signupbtn.addEventListener("click", function(){
    signUpCount++
    signInCount = 0;
   if(signUpCount === 1){
    signup()
   }else if(signUpCount > 1){
    if(isSigninFormEmpty()){
        displayErrorMessage()
    }else{
        alert("signupsuccessful")
    }
   }
})

////////////////////////////////////////////////////////////////////////////////////////////////////